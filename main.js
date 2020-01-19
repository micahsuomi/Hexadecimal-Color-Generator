const container = document.querySelector('.hexa-colors__wrapper');
const hexaInput = document.querySelector('.color-input');
const generateBtn = document.querySelector('.btn-generate');
const stopBtn = document.querySelector('.btn-stop');
let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector('.close-btn');


//Function to Display random hexa colors Colors
const displayHexaColors = () => {
    let lettersNums = '0123456789abcdef';
    let hexaColor = '';
    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * lettersNums.length);
        hexaColor = hexaColor + lettersNums[randomIndex]; 

    }
    return `#${hexaColor}`
};

//Display Colors when loading and refreshing the page
const init = (n=5) => {
    container.textContent = '';
    for(let i = 0; i < n; i++) {
        createHexaDivs();
       
    }
   
};

//function that generates random hexa colors on button click
const generateHexaColor = () => {
    () => clearInterval;
    const p = document.querySelector('.paragraph');

    if(hexaInput.value < 5) {
        p.textContent = 'Please enter a number greater than 5';
        p.style.color = 'red';

    } else if (!hexaInput.value.match(/^[0-9]*$/)){ 
        p.textContent = 'Please enter only digits, not letters or special characters';
        p.style.color = 'red';

    } else {
        container.textContent = '';
        p.textContent = 'Colors change people emotions so put meaningful colors in their life';
        p.style.color = 'white';

    for(let i = 0; i < hexaInput.value; i++) {
        createHexaDivs();
     }
   
}

};

//create divs calling the random hexa function
const createHexaDivs = () => {
    let hexaCode = document.createElement('h1');
    let hexaColorBox = document.createElement('div');
    hexaColorBox.setAttribute('class','hexa');
    hexaColorBox.setAttribute('id', 'hexa');
    hexaCode.setAttribute('class', 'hexa-text');
    hexaCode.setAttribute('id', 'hexa-code');
    copyBtn = document.createElement('button');

    let bgColor = displayHexaColors();
    hexaCode.innerHTML = bgColor;
    hexaColorBox.style.background = bgColor;
    copyBtn.setAttribute('class', 'copy-btn');
    copyBtn.textContent = 'Copy'; 

    hexaColorBox.append(hexaCode);
    hexaColorBox.append(copyBtn);
    container.append(hexaColorBox);
  
    //stops and clears the interval
    stopBtn.addEventListener('click', () => clearInterval(interval));
   
    //copies the hexa color value
    copyBtn.addEventListener('click', copyColorValue = () => {
        console.log(hexaCode.innerHTML);
        let hexaValue = hexaCode.innerHTML;
        let input = document.createElement('textarea');
        input.value = hexaValue;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
        openModal();

    });

    //closes the modal popup
    closeModalBtn.addEventListener('click', closeModal = () => {
        modal.style.display = 'none';     
});

//time interval
    let interval = setInterval(() => {
        let bgColor = displayHexaColors();
        hexaCode.innerHTML = bgColor;
        hexaColorBox.style.background = bgColor;
    }, 2000);
}

//button that generates the random colors and divs
generateBtn.addEventListener('click', () => {
    generateHexaColor()});

//the input calls the generate hexa when Enter key is pressed
hexaInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        document.querySelector('.btn-generate').click();
    }
});

//opens the modal popup
const openModal = () => {
    modal.style.display = 'block';

};

//initializes the page
init();












