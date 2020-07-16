'use strict'


function getHeroes(){
    const heroes = document.querySelector('.heroes');
        let randomHeroes = []

        while(randomHeroes.length < 10){
            var selectRandom = Math.floor(Math.random()*731)

            randomHeroes.push(selectRandom)
        }
        let counter = 0
        for(var i = 0; i<randomHeroes.length+ 1;i++){
         fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/599075271045222/${randomHeroes[i]}`)

        .then((response) =>{
            return response.json()
        })
    
        .then((data) => {
            if(data.powerstats.intelligence != "null" && counter < 2){
            
           
            const article = document.createElement('article');
            article.innerHTML =`
            <h3>${data.name}</h3> 
            <img src = "${data.image.url}" alt = "${data.name}"/>
            <ul>
            <li>Intelligence:${data.powerstats.intelligence}</li>
            <li>Strength:${data.powerstats.strength}</li>
            <li>Speed:${data.powerstats.speed}</li>
            <li>Durability:${data.powerstats.durability}</li>
            <li>Power:${data.powerstats.power}</li>
            <li>Combat:${data.powerstats.combat}</li>
            </ul>
            `
            console.log(data)
            heroes.appendChild(article)
            counter++
        }
        })
        .catch((err) =>{})
    }
            
    }

        getHeroes();


    