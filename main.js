
// ercise 1
const people =["Greg", "Mary", "Devon", "James"];
// 1 - la suppression du Greg
 console.log(people.shift())
// 2 - Write code to replace “James” to “Jason”.
 let result = people.splice(3, 1,'Jason')

 console.log(result)


 // 3 Write code to add your name to the end of the people array.
 let affiche = people.push("Adoni ")
 console.log(affiche)
// 4 -Write code that console.logs Mary’s index

console.log(people[1])


// 5 - Write code to make a copy of the people array using the slice method
 let resultat = people.slice(0)
 console.log(resultat)


 // 6 -


 // 7 -

 let last = people[3]
 console.log(last);
 // interpretation 

 //Part II - Loops 

 for(let pers in people)
 {
    console.log(pers[0])
 }
 for(let per in people)
 {
    console.log(per[1])
 }

 for(let peop in people)
 {
    console.log(peop[2])
 }


 // 2 - Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .

 for (let i = 0; i < people.length; i++) {
    if (i === 2) { 
        break;
      }
    console.log("jason "); // 0 1 2
  }
 


  // Exercise 2 : Your Favorite Colors

  const colors=["blue", "yello", "red","green","white"]

  switch (colors) {
    case 0:console.log("mon choix est n°1 est white")
            break;

    case 1: console.log("mon choix est n°2 est blue")  
            break;
     
     case  2:console.log("mon choix est n°3 est green")
              break;
     case 3:console.log("mon choix est n°4 est red") 
            break;
            
     case 4 :console.log("mon choix est n°5 est yello")  
             break;    
    default: console.log("white")
        break;
  }


  //Exercise 5 : Family

  let family = ["orange", "banane","avocat", "carotte","pomme"]
   var respo= family
   
  for(let fam in family){
    console.log(fam[0])
  }

  console.log(respo)

  // Exercise 6 : Rudolf




  // Exercise 3 : Repeat The Question
 // 1
  let data = prompt("quel est votre numero ?")

  console.log(typeof(data))

  // 2 tant que le n> 10 c'est la boucle do wile qu'on utilise 


  // exercise 4

  /*const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
} */