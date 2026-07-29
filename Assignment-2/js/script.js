// Display student information
document.getElementById("studentInfo").textContent =
    "Student Name: Mateo Grueso | Student ID: 200655020";

// Pizza class
class Pizza {
    constructor(name, size, quantity, crust, sauce, extraCheese, instructions) {
        this.name = name;
        this.size = size;
        this.quantity = quantity;
        this.crust = crust;
        this.sauce = sauce;
        this.extraCheese = extraCheese;
        this.instructions = instructions;
    }

    // returns a description of the pizza order
    getDescription() {
        return `${this.quantity} ${this.size} ${this.name} pizza(s) with ${this.crust} crust, ${this.sauce} sauce, ${this.extraCheese ? "extra cheese" : "no extra cheese"}, and special instructions: "${this.instructions}".`;
    }