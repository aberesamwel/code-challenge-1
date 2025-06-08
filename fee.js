// Function to estimate the transaction fee based on the amount to send
function estimateTransactionFee(amountToSend) {
    // Calculate the fee as 1.5% of the amount to send
    let fee = amountToSend * 0.015;

    // If the fee is less than 10, set the fee to 10 (minimum fee)
    if (fee < 10) {
        fee = 10;
    } 
    // If the fee is greater than 70, set the fee to 70 (maximum fee)
    else if (fee > 70) {
        fee = 70;
    }

    // Calculate the total amount to be debited (amount + fee)
    const total = fee + amountToSend;

    // Logging the breakdown of the transaction
    console.log(`Sending KES ${amountToSend}`);  // Display the amount the user wants to send
    console.log(`Calculated Transaction Fee: KES ${fee}`);  // Display the calculated fee
    console.log(`Total amount to be debited: KES ${total}`);  // Display the total amount (amount + fee)
    console.log(`Send Money Securely!`);  // Encourage secure sending
}

// Prompt the user to enter the amount they would like to send
let input = prompt("Enter the amount of money you would like to send:");

// Parse the input to an integer
let amount = parseInt(input);

// Check if the input is a valid number
if (!isNaN(amount)) {
    // If valid, show the amount the user is required to send
    console.log(`You are required to send KES ${amount}`);
    
    // Call the function to estimate the transaction fee
    estimateTransactionFee(amount);
} else {
    // If invalid, ask the user to enter a valid amount
    console.log("Please enter a valid amount");
}
