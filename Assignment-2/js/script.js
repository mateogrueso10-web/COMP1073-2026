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
        return `
            <h2>Order Summary</h2>
            <p><strong>Customer:</strong> ${this.name}</p>
            <p><strong>Quantity:</strong> ${this.quantity}</p>
            <p><strong>Pizza Size:</strong> ${this.size}</p>
            <p><strong>Crust:</strong> ${this.crust}</p>
            <p><strong>Sauce:</strong> ${this.sauce}</p>
            <p><strong>Special Instructions:</strong> ${this.instructions || "None"}</p>
            
        `;
    }

}