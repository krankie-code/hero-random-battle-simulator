'use strict'

class Signup {
    constructor() {
        this.nameInput = document.querySelector('#exampleName');
        this.powerInput = document.querySelector('#examplePower');
        this.emailInput = document.querySelector('#exampleInputEmail1');
        this.passwordInput = document.querySelector('#exampleInputPassword1');
        this.repeatPasswordInput = document.querySelector('#exampleRepeatPassword1');

        this.buttonInput = document.querySelector('#btn');
        this.errorsWraper = document.querySelector('.message-container');
        
    }
    handleEmailInput = () => {
        const email = event.target.value;

        console.log('email', email );
        validator.validateValidEmail(email)

        const errors = validator.getErrors();

        if(!errors.invalidEmailError){
            validator.validateUniqueEmail(email);
        }
        this.setErrors();
        this.checkButton();
    }

    handlePasswordInput = (event) =>{
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value

        console.log('password', password );

        validator.validatePassword(password)
        validator.validateRepeatPassword(passwordRepeat)
        this.setErrors();
        this.checkButton();

    }
       
    handleRepeatPassword = (event) => {
        const repeatPassword = event.target.value;
        const password = this.passwordInput.value;


        
        validator.validatePassword(password)
        validator.validateRepeatPassword(password,repeatPassword)
        console.log('repeatPassword', repeatPassword)
        this.setErrors();
        this.checkButton();
    }

    saveData = (event) =>{

        event.preventDefault();

        const name = this.nameInput.value;
        const power = this.powerInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;


        const newUser = new User(name,power,email,password);

        db.saveNewUsers(newUser)

        this.nameInput.value = '';       
        this.powerInput.value = '';  
        this.emailInput.value = '';
        this.passwordInput.value = '';
        this.repeatPasswordInput = '';

    }

    addListeners = () =>{
        this.emailInput.addEventListener('input', this.handleEmailInput);
        this.passwordInput.addEventListener('input', this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener('input',this.handleRepeatPassword);

        this.buttonInput.addEventListener('click', this.saveData)
        
    }



    checkButton = () => {
        const errorsObj = validator.getErrors();
        const errorsArr = Object.values(errorsObj);
        
    
        if(errorsArr.length > 0) {
          this.buttonInput.disabled = true;
        }
        else {
          this.buttonInput.disabled = false;
        }
      }
    
      removeMessages = () => {
        setTimeout( () => {
          this.errorsWrapper.innerHTML = "";
        }, 2000)
      }


    setErrors = () =>{
        this.errorsWraper.innerHTML = '';
        const errorsObj = validator.getErrors();
        
        const errorStrArr = Object.values(errorsObj);

        errorStrArr.forEach((errorStr) =>{
           const errorMessage = document.createElement('p');

           errorMessage.innerHTML = errorStr

           this.errorsWraper.appendChild(errorMessage);
        })
    }
     
}

const signup = new Signup();

window.addEventListener('load', signup.addListeners)