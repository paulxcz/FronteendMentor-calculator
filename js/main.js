const key1 = document.getElementById('key1');
const key2 = document.getElementById('key2');
const key3 = document.getElementById('key3');
const key4 = document.getElementById('key4');
const key5 = document.getElementById('key5');
const key6 = document.getElementById('key6');
const key7 = document.getElementById('key7');
const key8 = document.getElementById('key8');
const key9 = document.getElementById('key9');
const key0 = document.getElementById('key0');

//operators
const keyPlus = document.getElementById('keyPlus');
const keyLess = document.getElementById('keyLess');
const keyDivision = document.getElementById('keyDivision');
const keyMultiply = document.getElementById('keyMultiply');


const keyPoint = document.getElementById('keyPoint');
const keyDel = document.getElementById('keyDel');
const keyReset = document.getElementById('keyReset');
const keyEqual = document.getElementById('keyEqual');

const windowToShow = document.querySelector('.windowToShow');

//Variables
let numberA = 0;
let numberB = 0;
let operator = "";

//Function of the keys
function keyPress(key){
    switch (key) {
        case 0:
            windowToShow.innerText += '0'; 
            break;

        case 1:
            windowToShow.innerText += '1';
            break;
    
        
        case 2:
            windowToShow.innerText += '2';
            break;

        
        case 3:
            windowToShow.innerText += '3';
            break;

            
        case 4:
            windowToShow.innerText += '4';
            break;

            
        case 5:
            windowToShow.innerText += '5';
            break;

            
        case 6:
            windowToShow.innerText += '6';
            break;

            
        case 7:
            windowToShow.innerText += '7';
            break;

            
        case 8:
            windowToShow.innerText += '8';
            break;

            
        case 9:
            windowToShow.innerText += '9';
            break;

        case 'delete':
            let string;
            if (windowToShow.textContent != '' ) {
               windowToShow.textContent = windowToShow.textContent.substring(0,windowToShow.textContent.length-1);          
            }
            break;    
        
        case 'point':
            if (windowToShow.textContent != '' ) {
                windowToShow.innerText += '.';
            }
            break;    

        case 'plus':
            if (windowToShow.textContent != '' ) {
                numberA = windowToShow.textContent;
                operator = "+"
                windowToShow.textContent = "";
            }
            break;
        
        case 'less':
            if (windowToShow.textContent != '' ) {
                numberA = windowToShow.textContent;
                operator = "-"
                windowToShow.textContent = "";
            }
            break;

        case 'division':
            if (windowToShow.textContent != '' ) {
                numberA = windowToShow.textContent;
                operator = "/"
                windowToShow.textContent = "";
            }

        case 'multiply':
            if (windowToShow.textContent != '' ) {
                numberA = windowToShow.textContent;
                operator = "*"
                windowToShow.textContent = "";
            }
            break;
        
        case 'reset':
            operator = "";
            numberA = 0;
            numberB = 0;
            windowToShow.textContent = "";
            break;

        case 'result':
            let resultado;
            if (windowToShow.textContent != '' ) {
                numberB = windowToShow.textContent;
                resultado = operar(operator, numberA, numberB);
                windowToShow.textContent = resultado;
            }
            break;   

        default:
            break;
    }
}

function operar (operador, n1, n2){
    
    switch (operador) {
        case "+":   return(parseFloat(n1) + parseFloat(n2));  break;
        case "-":   return(parseFloat(n1) - parseFloat(n2));  break;
        case "/":   return(parseFloat(n1) / parseFloat(n2));  break;
        case "*":   return(parseFloat(n1) * parseFloat(n2));  break;     
        
    }
}

//FUCTION TO CHANGE THE THEMES
const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');
const theme3 = document.getElementById('theme3');
const selector = document.getElementById('selector');
const scrollBall = document.getElementById('selector-ball');
const arrayKeys = document.querySelectorAll('.key');
let currentTheme = 1;

selector.addEventListener('click', ()=>{

    if (currentTheme == 1) {
        currentTheme = 2;
        scrollBall.style.left = theme1.clientWidth + 5 + "px";
        changeColors('hsl(0, 0%, 90%)', 'hsl(60, 10%, 19%)', 'hsl(60, 10%, 19%)', 'hsl(60, 10%, 19%)', 'hsl(0, 5%, 81%)', 'hsl(25, 98%, 40%)', 'hsl(0, 0%, 93%)', 'hsl(60, 10%, 19%)', 'hsl(0, 5%, 81%)', 'hsl(45, 7%, 89%)', 'hsl(60, 10%, 19%)', 'hsl(185, 42%, 37%)', 'hsl(45, 7%, 89%)','hsl(185, 42%, 37%)', 'hsl(45, 7%, 89%)', 'hsl(25, 98%, 40%)', 'hsl(45, 7%, 89%)', '0px 4px 0px 0px hsl(35, 11%, 61%)', '0px 4px 0px 0px hsl(185, 58%, 25%)', '0px 4px 0px 0px hsl(185, 58%, 25%)', '0px 4px 0px 0px hsl(25, 99%, 27%)');
    }else if (currentTheme == 2) {
        currentTheme = 3;
        scrollBall.style.left = theme2.clientWidth + theme1.clientWidth + 5 +"px";
        changeColors('hsl(268, 75%, 9%)', 'hsl(52, 100%, 62%)', 'hsl(52, 100%, 62%)', 'hsl(52, 100%, 62%)', 'hsl(268, 71%, 12%)', 'hsl(176, 100%, 44%)', 'hsl(268, 71%, 12%)', 'hsl(52, 100%, 62%)', 'hsl(268, 71%, 12%)', 'hsl(268, 47%, 21%)', 'hsl(52, 100%, 62%)', 'hsl(281, 89%, 26%)','hsl(0, 0, 100%)','hsl(281, 89%, 26%)', 'hsl(0, 0, 100%)', 'hsl(176, 100%, 44%)', 'hsl(198, 20%, 13%)', '0px 4px 0px 0px hsl(290, 70%, 36%)', '0px 4px 0px 0px hsl(285, 91%, 52%)', '0px 4px 0px 0px hsl(285, 91%, 52%)', '0px 4px 0px 0px hsl(177, 92%, 70%)');
    }else if (currentTheme == 3) {
    currentTheme = 1;
    scrollBall.style.left = "2px";
    changeColors('','','','','','','','','','','','','','','','','','','','','');        
    }
})

function changeTheme(theme){
if (theme === 'theme1') {
    currentTheme = 1;
    scrollBall.style.left = "2px";
    changeColors('','','','','','','','','','','','','','','','','','','','','');
}else if (theme === 'theme2') {
    currentTheme = 2;
    scrollBall.style.left = theme1.clientWidth + 5 + "px";
    changeColors('hsl(0, 0%, 90%)', 'hsl(60, 10%, 19%)', 'hsl(60, 10%, 19%)', 'hsl(60, 10%, 19%)', 'hsl(0, 5%, 81%)', 'hsl(25, 98%, 40%)', 'hsl(0, 0%, 93%)', 'hsl(60, 10%, 19%)', 'hsl(0, 5%, 81%)', 'hsl(45, 7%, 89%)', 'hsl(60, 10%, 19%)', 'hsl(185, 42%, 37%)', 'hsl(45, 7%, 89%)','hsl(185, 42%, 37%)', 'hsl(45, 7%, 89%)', 'hsl(25, 98%, 40%)', 'hsl(45, 7%, 89%)', '0px 4px 0px 0px hsl(35, 11%, 61%)', '0px 4px 0px 0px hsl(185, 58%, 25%)', '0px 4px 0px 0px hsl(185, 58%, 25%)', '0px 4px 0px 0px hsl(25, 99%, 27%)');
}else if(theme === 'theme3'){
    currentTheme = 3;
    scrollBall.style.left = theme2.clientWidth + theme1.clientWidth + 5 +"px";
    changeColors('hsl(268, 75%, 9%)', 'hsl(52, 100%, 62%)', 'hsl(52, 100%, 62%)', 'hsl(52, 100%, 62%)', 'hsl(268, 71%, 12%)', 'hsl(176, 100%, 44%)', 'hsl(268, 71%, 12%)', 'hsl(52, 100%, 62%)', 'hsl(268, 71%, 12%)', 'hsl(268, 47%, 21%)', 'hsl(52, 100%, 62%)', 'hsl(281, 89%, 26%)','hsl(0, 0, 100%)','hsl(281, 89%, 26%)', 'hsl(0, 0, 100%)', 'hsl(176, 100%, 44%)', 'hsl(198, 20%, 13%)', '0px 4px 0px 0px hsl(290, 70%, 36%)', '0px 4px 0px 0px hsl(285, 91%, 52%)', '0px 4px 0px 0px hsl(285, 91%, 52%)', '0px 4px 0px 0px hsl(177, 92%, 70%)');
}
}
//Font family
// $fontfamily: 'Spartan', sans-serif;
// $fontSizeNumbers: 32px;

// //theme1
// $theme1Background: hsl(222, 26%, 31%);
// $theme1KeypadBackground: hsl(223, 31%, 20%);
// $theme1ScreenBackground: hsl(224, 36%, 15%);

// //KEYS 1
// $theme1Key1BlueBackground: hsl(225, 21%, 49%);
// $theme1Key1BlueShadow: hsl(224, 28%, 35%);

// $theme1Key1Toggle: hsl(6, 63%, 50%);
// $theme1Key1ToggleShadow: hsl(6, 70%, 34%);

// $theme1Key1normal: hsl(30, 25%, 89%);
// $theme1Key1normalShadow : hsl(29, 16%, 65%);

// //Text 1
// $TextDarkGrayishBlue : hsl(221, 14%, 31%);
// $TextWhite:hsl(0, 0, 100%);


// //theme 2
// $theme2Background: hsl(0, 0%, 90%);
// $theme2KeypadBackground: hsl(0, 5%, 81%);
// $theme2ScreenBackground: hsl(0, 0%, 93%);

// //KEYS 2
// $theme1Key2BlueBackground: hsl(185, 42%, 37%);
// $theme1Key2BlueShadow: hsl(185, 58%, 25%);

// $theme1Key2Toggle: hsl(25, 98%, 40%);
// $theme1Key2ToggleShadow: hsl(25, 99%, 27%);

// $theme1Key2normal: hsl(45, 7%, 89%);
// $theme1Key2normalShadow : hsl(35, 11%, 61%);

// //Text 2
// $TextDarkGrayishBlue : hsl(60, 10%, 19%);


// //theme3
// $theme3Background: hsl(268, 75%, 9%);
// $theme3Keypad-ScreenBackground: hsl(268, 71%, 12%);

// //KEYS 3
// $theme3Key3BlueBackground: hsl(281, 89%, 26%);
// $theme3Key3BlueShadow: hsl(285, 91%, 52%);

// $theme3Key3Toggle: hsl(176, 100%, 44%);
// $theme3Key3ToggleShadow: hsl(177, 92%, 70%);

// $theme3Key3normal: hsl(268, 47%, 21%);
// $theme3Key3normalShadow : hsl(290, 70%, 36%);

// //Text 3
// $TextLightYellow: hsl(52, 100%, 62%);
// $TextDarkBlue: hsl(198, 20%, 13%);


function changeColors(backgroundColor, mainLogoColor, themeLogoColor, colorThemesIcons, selectorBackgroundColor, selectorBallBackgroundColor, windowToShowBackground, windowToShowColor, panelkeysBackground, keysBackground, keysColor, keyDelBackgroundColor, keyDelColor, KeyResetBackgroundColor, keyResetColor, keyEqualBackgroundColor, keyEqualColor, shadowNormalKey, keyDelShadow, keyResetShadow, keyEqualShadow){
  document.body.style.backgroundColor = backgroundColor;
  document.getElementById('main-logo').style.color = mainLogoColor;
  document.getElementById('theme-logo').style.color = themeLogoColor;
  theme1.style.color = colorThemesIcons;
  theme2.style.color = colorThemesIcons;
  theme3.style.color = colorThemesIcons;
  document.getElementById('selector').style.backgroundColor = selectorBackgroundColor;
  document.getElementById('selector-ball').style.backgroundColor = selectorBallBackgroundColor;
  document.querySelector('.windowToShow').style.backgroundColor = windowToShowBackground;
  document.querySelector('.windowToShow').style.color = windowToShowColor;
  document.querySelector('.panelKeys').style.backgroundColor = panelkeysBackground;
  arrayKeys.forEach(element => {
    element.style.backgroundColor = keysBackground;
    element.style.color =  keysColor;
    element.style.boxShadow = shadowNormalKey;
 });
 keyDel.style.backgroundColor = keyDelBackgroundColor;
 keyDel.style.color = keyDelColor;
 keyDel.style.boxShadow = keyDelShadow;
 keyReset.style.backgroundColor = KeyResetBackgroundColor;
 keyReset.style.color = keyResetColor;
 keyReset.style.boxShadow = keyResetShadow;
 keyEqual.style.backgroundColor = keyEqualBackgroundColor;
 keyEqual.style.color = keyEqualColor;
 keyEqual.style.boxShadow = keyEqualShadow;
}


