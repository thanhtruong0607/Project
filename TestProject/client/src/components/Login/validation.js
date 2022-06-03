const validation = (username, password) => {

    let errors = {};

    if(!username){
        errors.username = "Username is required"
    }

    if(!password){
        errors.password = "Password is required"
    }else if(password.length < 6){
        errors.password = "Password must be more than five characters"
    }

    return errors;
}
export default validation;