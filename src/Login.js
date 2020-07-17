'use strict'

class Login{
    constructor(){
        this.emailInput = document.getElementById('exampleEmail1')
        this.passwordInput = document.getElementById('examplePassword1')
        
        this.loginButton = document.querySelector('.btn1')
        this.messageContainer = document.querySelector('.message-container1')
    }

    submit = (event) =>{
        event.preventDefault();

        const usersDB = db.getAllUsers();

        const email = this.emailInput.value;
        const password = this.passwordInput.value


       const user = usersDB.find((userObj) =>{
            if(userObj.email === email && userObj.password === password){
                return true;
            }
            
        
        })

        this.showMessage(user)

    }

    showMessage = (user) =>{
        this.messageContainer.innerHTML = ''
        const message = document.createElement('p');

        if(user){
        message.innerHTML = `Hola ${user.email}`
        message.classList.add('correct-message');
        }else{
            message.innerHTML = `El email o password son incorrectos`
        }
        this.messageContainer.appendChild(message);

        if(user)
            this.redirect()
        
      }
      redirect = () => {
        setTimeout( ()=> location.assign('https://www.google.es/'), 4000);
      }
    
    }
    
const login = new Login();

    login.loginButton.addEventListener('click',login.submit)