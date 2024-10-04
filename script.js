document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pollForm');
    const htmlRange = document.querySelector('input[name="html"]');
    const cssRange = document.querySelector('input[name="css"]');
    const jsRange = document.querySelector('input[name="javascript"]');
    const htmlOutput = document.querySelector('output[for="html"]');
    const cssOutput = document.querySelector('output[for="css"]');
    const jsOutput = document.querySelector('output[for="javascript"]');
    const htmlResult = document.getElementById('htmlResult');
    const cssResult = document.getElementById('cssResult');
    const jsResult = document.getElementById('jsResult');

    // Update output values
    function updateOutputs() {
        htmlOutput.textContent = htmlRange.value;
        cssOutput.textContent = cssRange.value;
        jsOutput.textContent = jsRange.value;
    }

    // Update results display
    function updateResults() {
        htmlResult.textContent = `HTML: ${htmlRange.value}`;
        cssResult.textContent = `CSS: ${cssRange.value}`;
        jsResult.textContent = `JavaScript: ${jsRange.value}`;
    }

    // Update outputs on range input change
    form.addEventListener('input', function() {
        updateOutputs();
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        updateResults();
    });
});