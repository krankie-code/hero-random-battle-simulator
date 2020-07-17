'use strict'


function getHeroes(){
    

            

    const heroes = document.querySelector('.heroes');
    heroes.innerHTML = '';

        let randomHeroes = []

        while(randomHeroes.length < 4){
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
                        article.classList.add('column');
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
                    if(counter == 0){
                        heroes.innerHTML += `<div class="column">
                                                    <img class ="versus" src="img\\versus-symbol-png-6.png" alt="">
                                                </div>`
                    }
                    
                    counter++
                    
                         
                }
                
                
                function sum(powerstats){
                    var numbers = Number(powerstats.intelligence)+Number(powerstats.strength) +Number(powerstats.speed)+Number(powerstats.durability)+Number(powerstats.power)+Number(powerstats.combat)
                    console.log(numbers)
                    total.push(numbers)
                    
                    return numbers
                    
                }
                
            
                console.log(total)
                console.log(sum(data.powerstats))
                
    })
        .catch((err) =>{})

    }
            
    }

        getHeroes();

        
        document.getElementById('#start').addEventListener('click', getHeroes)
    