// Created by Bradley Burks
// Bates Technical College - Fall 2025

export class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name || "";
        this.email = email || "";
    }
    
    getContactInfo() {
        return `${this.name} <${this.email}>`;
    }
}