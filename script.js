let history = [];

function appenToDisplay(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    const result = document.getElementById('result');
    const expression = result.value;
}

if (isVlidExpression(expression)) {
    const evaluetedResult = evalueteExpression (expression);
    addToHistory(expression, evaluetedResult);
    result.value = evaluetedResult;
} else {
    alert('Expressão Inválida');
}

function isValidExpression(expression) {
    const regex = /^[0-9+\-*/^.()]*$/;
    return regex.test(expression)
}

function evalueteExpression(expression) {
    let formattedExpression = expression.replace(/\^/g,'**');
    return Function(`"use strict"; return(${formattedExpression})`)();
}

function addToHistory(expression, result) {
    history.pushState({expression, result});
    updateHistory();
}

function updateHistory() {
    const history = document.getElementById('historyList');
    historyListy.innerHTML = ''
    history.forEach(entry =>{
        let li = document.createElement('li');
        li.textContent = `${entry.expression} =${entry.result}`;
        historyList.appendChild(li);
        
    });
}

function toggleScientificMode(){
    const sciButtons = document.getElementById('scientific-buttons');
    if (sciButtons.style.display === 'none'){
        sciButtons.style.display = 'grid'
    } else {
        sciButtons.style.display = 'none';
    }
}