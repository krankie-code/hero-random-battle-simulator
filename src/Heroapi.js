'use strict'


function getHeroes(){
    const heroes = document.querySelector('.heroes');

    var arr = [];
       
            for(var i = 1; i<731;i++){
         fetch(`https://superheroapi.com/api/599075271045222/${i}`)
        .then((response) =>{
            return response.json()
        })

        .then((data) => {
            const article = document.createElement('article');
            article.innerHTML = `<img src = "${data.image.url}" alt = "${data.name}"/>
                                 <h3>${data.name}</h3>   `
    

            section.appendChild(article)
                 })
            .catch((err) =>{})
            }
            
    }

        getHeroes();


    

    
