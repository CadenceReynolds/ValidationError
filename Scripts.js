class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = ValidationError;
    }
}

function validateUsername(username){
    if(username.length < 10){
        throw new ValidationError;
    }
    return "Username is Valid"
}

try{
    console.log(validateUsername("abc"));
}catch(error){
    console.error(`${error.name}: ${error.message}`)
}