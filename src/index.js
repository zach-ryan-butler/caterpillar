import feedCaterpillar from './feed-Caterpillar.js';

const fruitButtons = document.querySelectorAll('.fruit');
const caterPillarHead = document.getElementById('caterpillar');
const dancingButtonsNodeList = document.querySelectorAll('.dancing');
const resetButton = document.getElementById('reset-button');

for(let i = 0; i < fruitButtons.length; i++) {
    const fruitButton = fruitButtons[i];

    fruitButton.addEventListener('click', () => {
        feedCaterpillar(caterPillarHead, fruitButton.value);
    });
}

for(let i = 0; i < dancingButtonsNodeList.length; i++) {
    const dancingButton = dancingButtonsNodeList[i];
   

    dancingButton.addEventListener('click', () => {
        const selectAllParts = document.querySelectorAll('.part');
        const selectColor = document.querySelectorAll('.' + dancingButton.value);
        
        
        for(let index = 0; index < selectAllParts.length; index++) {
            const bodyPart = selectAllParts[index];
            bodyPart.classList.remove('dance');
            
        }
        for(let index = 0; index < selectColor.length; index++) {
            const colorPart = selectColor[index];
            colorPart.classList.add('dance');     
            
        }
    });   
}

resetButton.addEventListener('click', () => {
    caterPillarHead.removeChild(caterPillarHead.lastChild);
});