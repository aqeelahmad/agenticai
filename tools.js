// const axios = require('axios');
import axios from "axios";

export async function getCurrentWeather(location) {
    const apiUrl = `https://wttr.in/${encodeURIComponent(location)}?format=%C+%t`;

    try {
        const response = await axios.get(apiUrl);
        console.log(`Weather for ${location}: ${response.data}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// // Example usage:
// getCurrentWeather('Abu Dhabi');

export async function getLocation() {
    return "Abu Dhabi, UAE";
}