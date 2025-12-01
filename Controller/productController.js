// Created by Bradley Burks
// Bates Technical College - Fall 2025

import { Product } from "../models/product.js";

const baseUrl = "https://localhost:5001/api/product";

export async function getAllProducts() {
    
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) throw new Error("Failed to fetch products");
        
        const data = await response.json();
        return data.map(p => new Product(p.id, p.name, p.price, p.description));
    } catch (error) {
        console.error("Error:", error.message);
        return [];
    }
}

