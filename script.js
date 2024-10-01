document.getElementById('convertButton').addEventListener('click', function() {
    let numberInput = document.getElementById('numberInput').value.trim();
    let fromBase = parseInt(document.getElementById('fromBaseSelect').value);
    let toBase = parseInt(document.getElementById('toBaseSelect').value);
    let resultElement = document.getElementById('result');
    if (numberInput === '') {
        resultElement.textContent = 'Моля, въведете число.';
        return;
    }
    const validChars = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9a-fA-F]+$/
    };
    if (!validChars[fromBase].test(numberInput)) {
        resultElement.textContent = `Невалидно число за база ${fromBase}.`;
        return;
    }
    let decimalNumber = parseInt(numberInput, fromBase);
    let convertedNumber = decimalNumber.toString(toBase).toUpperCase();
    resultElement.textContent = convertedNumber;
});
