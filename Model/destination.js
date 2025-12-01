// Created by Bradley Burks
// Bates Technical College - Fall 2025

export class Destination {
    constructor(id, name, country, description, photoUrl) {
        this.id = id;
        this.name = name || "";
        this.country = country  || "";
        this.description = description || "";
        this.photoUrl = photoUrl || ""; 
    }

    getSummary() {
        return `${this.name} (${this.country}) - ${this.description}`;
    }
}