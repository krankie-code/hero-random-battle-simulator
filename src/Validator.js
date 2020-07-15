'use strict'

class Validator{

    constructor(){
        this.invalidEmailError = 'Este email no es valido';
        this.emailExists = 'Este email ya esta registrado';
        this.passwordError = "Esta contrasenya no es valida";
        this.repeatPasswordError = "Los campos no coinciden";
        
        this.errors ={ 
            invalidEmailError : this.invalidEmailError,
            passwordError : this.passwordError,
            repeatPasswordError : this.repeatPasswordError
        }
        
    }

    validateValidEmail = (email)=>{

        if(this.emailIsValid(email)){
            delete this.errors.invalidEmailError
        }else{
            this.errors.invalidEmailError = this.invalidEmailError
        }
    }

    emailIsValid = (email) =>{
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        const isValid = regex.test(email);

        return isValid
    }

    validateUniqueEmail = (newEmail) =>{
        const usersDB = db.getAllUsers();
        let emailUnique = true;
        if(usersDB.length > 0){
            usersDB.forEach((userObj)=> {
                if(userObj.email === newEmail){
                    emailUnique = false;
                }
            })

            if(emailUnique){
                 delete this.errors.repeatPasswordError
            }else{
                this.errors.emailExists = this.emailExists
            }
        }
    }

    validatePassword = (password) => {
            if(password.length > 5){
               delete this.errors.passwordError;
            }else{
                this.errors.passwordError = this.passwordError
            }
    }
    validateRepeatPassword = (password, repeatPassword) =>{
        if(password === repeatPassword){
            delete this.errors.repeatPasswordError;
        }else{
            this.errors.repeatPasswordError = this.repeatPasswordError;
        }
    }

    getErrors = () =>{
        return this.errors
    }

    resetValidators = () =>{
        this.errors = {
            invalidEmailError : this.invalidEmailError,
            passwordError : this.passwordError,
            repeatPasswordError : this.repeatPasswordError
        }
        
    }




}
const validator = new Validator();