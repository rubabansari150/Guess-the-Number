// function fo read the number
function readNum() {
    var paragraph = document.getElementById('myPragraph');
    var output = document.getElementById('output');
    var paragraphText = paragraph.textContent;
    output.textContent = 'Previous Number "' + paragraphText + '"';

}

// Function to set new paragraph text
function setNum() {
    var paragraph = document.getElementById('myPragraph');
    var newTextInput = document.getElementById('newTextInput');
    var output = document.getElementById('output');
    var newText = newTextInput.value;

    switch (true) {
        case newText.trim() === '':
            output.textContent = 'Please enter some number';
            break;

        case isNaN(newText.trim()):
            output.textContent = 'Please enter a valid number!';
            break;

        case newText.trim() >= 100:
            paragraph.textContent = newText;
            output.textContent = 'Too high!';
            newTextInput.value = '';
            break;
        default:
            paragraph.textContent = newText;
            output.textContent = 'Too low!';
            newTextInput.value = '';
            break;
    }

}