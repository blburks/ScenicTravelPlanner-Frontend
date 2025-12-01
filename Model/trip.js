// Created by Bradley Burks
// Bates Technical College - Fall 2025

export class Trip {
    constructor(id, userId, destinationId, startDate, endDate, notes) {
        this.id = id;
        this.userId = userId;
        this.destinationId = destinationId;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.notes = notes || "";
    }
    
    isValidDates() {
        return this.endDate >= this.startDate;
    }
    
    getDuration() {
        const diff = this.endDate - this.startDate;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
}