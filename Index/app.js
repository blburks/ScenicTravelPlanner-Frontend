// Created by Bradley Burks
// Bates Tech - Fall 2025

async function loadDestination() {
    try {
        const response = await fetch("http://localhost:5000/api/destination");
        const destinations = await response.json();
        
        const list = document.getElementById("destinationList");
        list.innerHTML = "";
        destinations.forEach(d => {
            const item = document.createElement("li");
            item.textContent = `${d.name} (${d.country}) - ${d.description}`;
            list.appendChild(item);
        });
    } catch (error) {
        console.error("Error loading destination:", error);
        }
}