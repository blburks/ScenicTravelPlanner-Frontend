// Created by Bradley Burks
// Bates Technical College - Fall 2025

import { Trip } from "../models/trip.js";

const baseUrl = "https://localhost:5001/api/trip";

export async function getAllTrips() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) throw new Error("Failed to fetch trips");
        const data = await response.json();
        return data.map(t => new Trip(t.id, t.userId, t.destinationId, t.startDate, t.endDate, t.notes));
    } catch (error) {
        console.error("Error:", error.message);
        return [];
    }
}