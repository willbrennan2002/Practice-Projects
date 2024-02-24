document.getElementById("conversionform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var binaryInput = document.getElementById("input").value.trim(); // Get the binary input
    var decimalResult = binaryToDecimal(binaryInput); // Convert binary to decimal

    document.getElementById("result").innerText = "Decimal: " + decimalResult; // Display the result
});

// Function to convert binary to decimal
function binaryToDecimal(binary) {
    // Check if the input is a valid binary number
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] !== '0' && binary[i] !== '1') {
            return "Invalid binary input"; // Return error message if not a valid binary number
        }
    }

    // Convert binary to decimal
    var decimal = parseInt(binary, 2);

    return decimal; // Return the decimal value
}