function Validation(values) {

    let errors = {}

    if(!values.name) {
        errors.name = 'name is required'
    }

    if(!values.email) {
        errors.email = 'email is required'
    }

    if(!values.password) {
        errors.password = 'password is required'
    } else if(values.password.length < 5) {
        errors.password = 'password must be more than 5 char'
    }
    return errors;
}

export default Validation;