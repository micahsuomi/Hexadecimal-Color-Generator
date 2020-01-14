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
    
        
        let interval = setInterval(() => {
            let bgColor = displayHexaColors();
            hexaCode.innerHTML = bgColor;
            hexaColorBox.style.background = bgColor;
        }, 2000);
    }
   
};


//Button that generates color divs
generateBtn.addEventListener('click', generateHexaColor = () => {
    () => clearInterval(i);
    const p = document.querySelector('.paragraph');

    if(hexaInput.value == null || hexaInput.value < 5) {
        p.textContent = 'Please enter a number greater than 5';
        p.style.color = 'red';
    } else {

        container.textContent = '';
        p.textContent = 'Colors change people emotions so put meaningful colors in their life';
        p.style.color = 'white';


    for(let i = 0; i < hexaInput.value; i++) {

        let hexaCode = document.createElement('h1');
        let hexaColorBox = document.createElement('div');
        let copyButton = document.createElement('button');

        console.log(hexaColorBox)
        
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
          
    //function to stop the changing colors

    let i = setInterval(() => {
        let bgColor = displayHexaColors();
        hexaCode.innerHTML = bgColor;
        hexaColorBox.style.background = bgColor;
    }, 2000);

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


});

init();



















//const testBtn = document.querySelector('.btn-stop');

/*
testBtn.addEventListener('click', createText = () => {
    let text = document.createElement('h1');
    text.textContent = 'Hello!';
    document.body.appendChild(text);
    let randomCodeH1 = document.createElement('h1');
    let randomCode = '';
    let lettersNums = 'abcdefg123456';
    for(let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random()*lettersNums.length);
        randomCode = randomCode + lettersNums[randomIndex]; 
    }
    randomCodeH1.textContent = randomCode;
    document.body.appendChild(randomCodeH1);

})*/

/*
generateBtn.addEventListener('click', generateHexaColor = () => {
    let hexaCode = document.createElement('h1');
    let hexaBox = document.createElement('div');
    let hexaColor = '#';
    let lettersNums = '0123456789abcdef';
    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random()*lettersNums.length);
        hexaColor = hexaColor + lettersNums[randomIndex];

    }
    
    hexaCode.innerHTML = hexaColor;
    hexaBox.style.background = hexaColor;
    hexaBox.setAttribute('class','hexa');
    hexaBox.setAttribute('id', 'hexa');
    hexaBox.append(hexaCode);
    container.append(hexaBox);

})*/
/*
generateBtn.addEventListener('click', generateHexaColor = () => {
    let lettersNums = '0123456789abcdef';
    let hexaColor = '#';
     
    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * lettersNums.length);
        hexaColor = hexaColor + lettersNums[randomIndex]; 
        
    }    
    
    return hexaColor;
    
})

const displayColor = () => {
    for(let i = 0; i < hexaInput.value; i++) {
       
        let hexaCode = document.createElement('h1');
    let hexaColorBox = document.createElement('div');
    let copyButton = document.createElement('button')
    let bgColor = generateHexaColor();
    hexaCode.innerHTML = bgColor;
        hexaColorBox.style.background = bgColor;
        copyButton.textContent = 'Copy';
        hexaColorBox.setAttribute('class','hexa');
        hexaColorBox.setAttribute('id', 'hexa');
        hexaCode.setAttribute('class', 'hexa-text');
        copyButton.setAttribute('class', 'copy-btn');
        hexaColorBox.append(hexaCode);
        hexaColorBox.append(copyButton);
        container.append(hexaColorBox);
       
    
    }

   

        // copyButton.addEventListener('click', copyToClipBoard = () => {
        // console.log(hexaCode);
        // let copied = document.createElement('textarea');
        // copied.select(hexaCode);
        // document.execCommand('copy');
        // alert(`Copied Text ${copied.value}`);
}*/





/*

const testHexaArrFunction = (n) => {
    let lettersNums = '0123456789abcdef';
    let hexaColor = '';
    let hexaArr = [];
    for(let i = 0; i < n; i++) {
        for(let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * lettersNums.length);
            hexaColor = hexaColor + lettersNums[randomIndex]; 
    
        }
        
        hexaArr.push(`#${hexaColor}`);
        hexaColor = '';

    }
    
    return hexaArr;
    
} 
console.log(testHexaArrFunction(4));

for(let i = 0; i < hexaInput.value ; i++) {
    const hexaCode = document.createElement('h1');
    const hexaColor = document.createElement('div');
    let bgColor = generateHexaColor();
    hexaColor.innerHTML = bgColor;
    hexaColor.style.background = bgColor;
    hexaColor.setAttribute('class','hexa');
    hexaColor.setAttribute('id', 'hexa');
    hexaColor.append(hexaCode);
    container.append(hexaColor);

}*/