function calculateBodaFare(distanceInKm){

    // Making variables to help  declaring the function 

    const baseFare = 50
    const chargePerKm = 15
    const distanceCharge = chargePerKm * distanceInKm
    const totalFare = baseFare + distanceCharge

    // Consoling each and every price and the distance to be covered


    console.log(`Uko kwote? Hiyo ni: ${distanceInKm}Km`)
    console.log(`Ukikalia pikipiki: KES${baseFare}`)
    console.log(`Mpaka uko: KES${chargePerKm}`)
    console.log(`Total: KES${totalFare}`)
    console.log("Panda pikipiki!")
}
// prompt message to the user to enter distance

let input = prompt("Please enter your distan ce in Kilometres")
let distance = parseInt(input)

// Conditional statement  to give give response in line of your input

if (!isNaN(distance)) {
    console.log(`Mpaka huko ni ${distance}Km`)
    calculateBodaFare(distance)
} else{
    console.log("Samahani weka kilomita zinazofaa")
}
