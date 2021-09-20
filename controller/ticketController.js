const Ticket = require('../model/schema');



exports.sendReservedTime = async (req , res , next) => {
    try {
        const tickets = await Ticket.find({reserve:true});
        if(tickets){
        return res.status(200).json({tickets});
        }
        res.json({message:"there is not any reserved ticket"});
        
    } catch (err) {
        console.log(err);
        const error = new Error(`your request doesn't register`);
        error.statusCode = 404;
        next(error);
    }
};


exports.reserving = async (req , res , next) => {
    const {day , time , date} = req.body;
    try {
        //!check special capacity
        

        //!validation
        const validate = await Ticket.TicketValidation(req.body);
        console.log(validate);

        //!create ticket
        const capacityOfSans = await Ticket.find({day , time}).countDocuments();

         if(capacityOfSans === 5){
            return res.json({message:'sorry this sanse is full'})
         }
         if(day !== "friday" && time !== "10-12"){
         await Ticket.create({
            day,
            time,
            reserve:true,
            sanseDate:date,
            capacity:5 - (capacityOfSans + 1),
        });
        res.status(200).json({message:'your operation was successful'});
         
    }else{
        await Ticket.create({
            day,
            time,
            reserve:true,
            sanseDate:date,
            capacity:5 - (capacityOfSans + 1),
            spcialCapacity:2
        });
        res.status(200).json({message:'your operation was successful'});
    }

    } catch (err) {
        console.log(err);
        const Arr = [];
        err.errors.forEach((item) => {
            Arr.push(item);
        })
        const error = new Error(Arr);
        error.statusCode = 400;
        next(error);
    }
};

