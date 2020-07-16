'use strict'


function getHeroes(){
    const heroes = document.querySelector('.heroes');

       
            for(var i = 1; i<3;i++){
         fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/599075271045222/${i}`)
        .then((response) =>{
            return response.json()
        })

        .then((data) => {
            const article = document.createElement('article');
            article.innerHTML = `
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
            console.log(Object.values(data.powerstats).reduce((t, {value}) => t + Number(value), 0))
            console.log(data.powerstats)
            console.log(sum(data.powerstats))
            console.log(Number(data.powerstats.intelligence)+Number(data.powerstats.strength))

            heroes.appendChild(article)
                 })
            .catch((err) =>{})
            }
            


    }

        getHeroes();

//fix
        function sum(powerstats){
            values = document.getElementsByTagName('li')

            var numbers = `[${Number(powerstats.intelligence)},${Number(powerstats.strength)},${Number(powerstats.speed)},${Number(powerstats.durability)},${Number(powerstats.power)},${Number(powerstats.combat)}]`
            console.log(numbers)
        
           return numbers.reduce((a,b)=> { a += b});
          
        }

        document.getElementById('#start').addEventListener('click', getHeroes)
      
        

     

    
