                        //Battle of bands//

/* A local nightclub is having a Battle of the Bands night in a few months. 
They expect many bands to sign up because the grand prize is $20,000. To make things easier on the
nightclub management, they want each band to be assigned a number so that they can easily keep 
track of the order in which the bands will perform.
Your job is to write a function that accepts any band name as an argument.
The function will increment a global variable by one each time it is invoked, and return that
number, and the band name concatenated together.*/

                //this is the exercise and it's working
// let bandNumber = 0;

// const takeNumber = function(names) {
//      bandNumber += 1
//         console.log(`${names} and your number is ${bandNumber}`)
//     }

// takeNumber("david")
// takeNumber("rolle")
// takeNumber("beatles")
// takeNumber("deks")


// i am trying to output the results in the dom whenever i click the button
let bandNumber = 0;

const takeNumber = function(event) { 
    let names = document.querySelector(".input").value
    console.log(event)
    let dom = document.querySelector(".bands")
    dom.innerHTML = `${names} and your number is ${bandNumber}`
    bandNumber += 1
     
    }

