const validation = (values) => {

    let errors = {};

    if(!values.username){
        errors.username = "Username is required"
    }

    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length < 5){
        errors.password = "Password must be more than five characters"
    }

    return errors;
}
export default validation;