const container = document.querySelector('.hexa-colors__wrapper');
const hexaInput = document.querySelector('.color-input');
const generateBtn = document.querySelector('.btn-generate');
const stopBtn = document.querySelector('.btn-stop');


//Function to Display Colors
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
const init = () => {
    () => clearInterval(interval);
    container.textContent = '';
    for(let i = 0; i < 5; i++) {
        let hexaCode = document.createElement('h1');
        let hexaColorBox = document.createElement('div');
        hexaColorBox.setAttribute('class','hexa');
        hexaColorBox.setAttribute('id', 'hexa');
        hexaCode.setAttribute('class', 'hexa-text');
        hexaCode.setAttribute('id', 'hexa-code');
        let copyButton = document.createElement('button');
    
        let bgColor = displayHexaColors();
        hexaCode.innerHTML = bgColor;
        hexaColorBox.style.background = bgColor;
        copyButton.setAttribute('class', 'copy-btn');
        copyButton.textContent = 'Copy'; 
    
        hexaColorBox.append(hexaCode);
        hexaColorBox.append(copyButton);
        container.append(hexaColorBox);
    
        
        stopBtn.addEventListener('click', () => clearInterval(interval));
        copyButton.addEventListener('mouseover', () => clearInterval(interval));
        copyButton.addEventListener('mouseout',  () => {
            init()
        });

        copyButton.addEventListener('click', copyColorValue = () => {
            console.log(hexaCode.innerHTML);
            let hexaValue = hexaCode.innerHTML;
            let input = document.createElement('input');
            input.value = hexaValue;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            input.remove();
          
        });
    
        //set interval. the function only calls the generate hexa color function but doesn't create new divs, just changes the attributes
        let interval = setInterval(() => {
            let bgColor = displayHexaColors();
            hexaCode.innerHTML = bgColor;
            hexaColorBox.style.background = bgColor;
        }, 2000);
    }
   
};


//function that generates random hexa color divs

const generateHexaColor = () => {
    () => clearInterval(i);
    const p = document.querySelector('.paragraph');
    const letters = /[A-Za-z%$&#@!;'*^}{["$}<>]/g;

    if(hexaInput.value < 5) {
        p.textContent = 'Please enter a number greater than 5';
        p.style.color = 'red';

    } else if (hexaInput.value.match(letters)){
        
        p.textContent = 'Please enter only digits, not letters or special characters';
        p.style.color = 'red';

    } else {

        container.textContent = '';
        p.textContent = 'Colors change people emotions so put meaningful colors in their life';
        p.style.color = 'white';


    for(let i = 0; i < hexaInput.value; i++) {

        let hexaCode = document.createElement('h1');
        let hexaColorBox = document.createElement('div');
        let copyButton = document.createElement('button');
        
        const bgColor = displayHexaColors();
        hexaCode.innerHTML = bgColor;
        hexaColorBox.style.background = bgColor;
        hexaColorBox.setAttribute('class','hexa');
        hexaColorBox.setAttribute('id', 'hexa');
        hexaCode.setAttribute('class', 'hexa-text');
        hexaCode.setAttribute('id', 'hexa-code');
        copyButton.setAttribute('class', 'copy-btn');
        copyButton.textContent = 'Copy';

        hexaColorBox.append(hexaCode);
        hexaColorBox.append(copyButton);
        container.append(hexaColorBox);      
          
    //set interval. the function only calls the generate hexa color function but doesn't create new divs, just changes the attributes
    let i = setInterval(() => {
        let bgColor = displayHexaColors();
        hexaCode.innerHTML = bgColor;
        hexaColorBox.style.background = bgColor;
    }, 2000);

    //function to stop the changing colors
    stopBtn.addEventListener('click', () => clearInterval(i));
    copyButton.addEventListener('mouseover', () => clearInterval(i));
    copyButton.addEventListener('mouseout', () => {
        generateHexaColor()
        
    })

    copyButton.addEventListener('click', copyColorValue = () => {
        console.log(hexaCode.innerHTML);
        let hexaValue = hexaCode.innerHTML;
        let input = document.createElement('input');
        input.value = hexaValue;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
    
    })
    }
   
}

};

//button that generates the random colors and divs
generateBtn.addEventListener('click', () => {
    generateHexaColor()});

//the input calls the generate hexa when Enter key is pressed
hexaInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        // console.log(e.which)
        document.querySelector('.btn-generate').click();
    }
});

//initializes the page
init();












