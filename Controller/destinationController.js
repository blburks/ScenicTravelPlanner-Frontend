// Created by Bradley Burks
// Bates Technical College - Fall 2025

import { Destination } from "../models/destination.js";

const baseUrl = "https://localhost:5001/api/destination";

export async function getAllDestinations() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) throw new Error("Failed to fetch destinations");
        const data = await response.json();
        return data.map(d => new Destination(d.id, d.name, d.country, d.description, d.photoUrl));
    } catch (error) {
        console.error("Error:", error.message);
        return [];
    }
}