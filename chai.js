// A function with ingeredients to help your make chai  bora
function calculateChaiIngredients(cups){
    if(cups === 1) {
        console.log("To make 1 cup of Kenyan chai,you will need;")
    } else {
        console.log(`To make ${cups} cups of Kenyan chai,you will need;`)
    }
    console.log("Milk:${cups * 200}ml")
    console.log("Water: ${cups * 50}ml")
    console.log("Tea leaves (Majani); ${cups *1} tablespoon${cups > 1")
    console.log("Sugar (Sukari); ${cups *1} teaspoon${cups > 1")
    console.log("Enjoy your Chai Bora")
}

// // Prompt a user to enter the credetials of making Chai Bora
let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
let cups = parseInt(input);

// Checking wheather you have right requirements of making Chai Bora
if (isNaN(cups)) {
  console.log("Please enter the number of cups of Chai Bora you want.");
} else if (cups <= 0) {
  console.log("You need at least 1 cup to make Chai!");
} else {
  calculateChaiIngredients(cups);
}