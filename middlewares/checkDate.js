exports.checkDate =  (req , res , next) => {
try{
    //*get date of sanse    
    const {date} = req.body;
    
    const arr = date.split("/");

    const day = +arr[0]
    console.log(day)

    const month = +arr[1]
    console.log(month)

    const year = +arr[2]
    console.log(year)

    const mainDate = new Date(year,month-1,day)
//!----------------------------------------------
//* get date of today and two week later

    let today = new Date();

    let twoWeekLaterDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
//!----------------------------------------------
//* check is date of sanse true?

    const isBetween = (date, min, max) => 
    {
        if(date.getTime() >= min.getTime() && date.getTime() <= max.getTime()){
            return true
        }
        return false
    };
    
    isBetween( mainDate , today , twoWeekLaterDate)

    if(isBetween(mainDate , today , twoWeekLaterDate)){
       return  next()
    }
    const error = new Error("this date is not valid")
    error.statusCode = 400;
    next(error);
}catch(err){
    console.log(err);
}

}