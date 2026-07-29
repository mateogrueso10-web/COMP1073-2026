// Display student information
document.getElementById("studentInfo").textContent =
    "Student Name: Mateo Grueso | Student ID: 200655020";

// Pizza class
class Pizza {
    constructor(name, size, quantity, crust, sauce, toppings, instructions) {
        this.name = name;
        this.size = size;
        this.quantity = quantity;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = toppings;
        this.instructions = instructions;
    }

    // Returns a description of the pizza order
    getDescription() {
        return `
            <h2>Order Summary</h2>
            <p><strong>Customer:</strong> ${this.name}</p>
            <p><strong>Quantity:</strong> ${this.quantity}</p>
            <p><strong>Pizza Size:</strong> ${this.size}</p>
            <p><strong>Crust:</strong> ${this.crust}</p>
            <p><strong>Sauce:</strong> ${this.sauce}</p>
            <p><strong>Toppings:</strong> ${
                this.toppings.length > 0
                    ? this.toppings.join(", ")
                    : "None"
            }</p>
            <p><strong>Special Instructions:</strong> ${
                this.instructions || "None"
            }</p>
        `;
    }
}

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("pizzaForm");

    form.addEventListener("submit", (event) => {

        // Prevent the form from submitting normally
        event.preventDefault();

        // Check HTML validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Capture form values
        const name = document.getElementById("name").value;
        const size = document.getElementById("pizzaSize").value;
        const quantity = document.getElementById("quantity").value;
        const crust = document.getElementById("crustType").value;
        const sauce = document.getElementById("sauce").value;
        const instructions = document.getElementById("instructions").value;

        // Capture selected toppings
        const toppings = [];

        document
            .querySelectorAll('input[name="toppings"]:checked')
            .forEach((topping) => {
                toppings.push(topping.value);
            });

        // Create a new Pizza object
        const pizzaOrder = new Pizza(
            name,
            size,
            quantity,
            crust,
            sauce,
            toppings,
            instructions
        );

        // Display the order summary
        document.getElementById("orderSummary").innerHTML =
            pizzaOrder.getDescription();

        // Optional: Reset the form after submitting
        form.reset();
    });

});