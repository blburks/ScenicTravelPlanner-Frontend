// Created by Bradley Burks
// Bates Technical College - Fall 2025

export class Product {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name || "";
        this.price = price || 0;
        this.description = description || "";
    }
    
    getDisplay() {
        return `${this.name} - $${this.price.toFixed(2)}`;
    }
}
