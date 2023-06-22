


const playButton = document.querySelector('button');

const bombsNumbers = [];

let i = 0;


playButton.addEventListener('click', function() {
   
    for(i = 1; i <= 100; i++) {
        const container = document.querySelector('.container');
        const square = document.createElement('div');
        square.classList.add('square');
        square.append(i);
        container.append(square);
        console.log('square', square, typeof square);

        square.addEventListener('click', function() {
            square.classList.add('clicked');
            console.log(this.innerHTML);

            for (let count = 0; count < bombsNumbers.length; count++) {
                
                if (i == bombsNumbers[count]) {

                    
                }
            }
        })
    
    }
    
    
})



while (bombsNumbers.length < 16) {
    const oneNumber = randomNumbers(1, 16);
    

    if (!bombsNumbers.includes(oneNumber)) {
        bombsNumbers.push(oneNumber);

        
    }
    
}
console.log(bombsNumbers);














// FUNCTIONS
    
 function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}   



function myBoard() {

    for(let i = 1; i <= 100; i++) {
        const container = document.querySelector('.container');
        const square = document.createElement('div');
        square.classList.add('square');
        square.append(i);
        container.append(square);
        console.log('square', square, typeof square);

        square.addEventListener('click', function() {
            square.classList.add('clicked');
            console.log(this.innerHTML);
        })
    
    }
}