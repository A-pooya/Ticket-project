const yup = require('yup');

exports.yupValidation = yup.object().shape({
    day:yup.mixed()
    .oneOf(["saturday","sunday","monday","tuesday","wednesday","thursday","friday"])
    .required('please choose your day'),
    time:yup.mixed()
    .oneOf(["8-10" ,"10-12" ,"12-14" ,"14-16"],"at the moment you can choose these times: 8-10 , 10-12 , 12-14 , 14-16")
    .required('please choose your time'),
    sanseDate:yup.string()
})
