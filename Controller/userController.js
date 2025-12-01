// Created by Bradley Burks
// Bates Technical College - Fall 2025

import { User } from "../models/user.js";

const baseUrl = "https://localhost:5001/api/user";

export async function getAllUsers() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        return data.map(u => new User(u.id, u.name, u.email));
    } catch (error) {
        console.error("Error:", error.message);
        return [];
    }
}

// Get user by ID
export async function getUserById(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`);
        if (!response.ok) throw new Error(`User with Id=${id} not found`);
        const u = await response.json();
        return new User(u.id, u.name, u.email);
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

// Create a new user
export async function createUser(user) {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        if (!response.ok) throw new Error("Failed to create user");
        return await response.json();
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }

}   

// Update an existing user
export async function updateUser(id, user) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        if (!response.ok) throw new Error("Failed to update user");
  return true;
    } catch (error) {
        console.error("Error:", error.message);
        return false;
    }
}

// Delete a user
export async function deleteUser(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Failed to delete user");
        return true;
    } catch (error) {
        console.error("Error:", error.message);
        return false;
    }
}