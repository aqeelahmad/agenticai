// const axios = require('axios');
import axios from "axios";

export async function getCurrentWeather({location}) {
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

// export async function getLocation() {
//     return "Abu Dhabi, UAE";
// }

export async function getLocation() {
  try {
    const response = await fetch('https://ipapi.co/json/')
    const text = await response.json()
    return JSON.stringify(`${text.city}, ${text.country_code}`)
    // return JSON.stringify(text)
  } catch (err) {
    console.log(err)
  }
}

export const tools = [
    {
        type: "function",
        function: {
            name: "getCurrentWeather",
            description: "Get the current weather",
            parameters: {
                type: "object",
                properties: {
                    location: {
                        type: "string",
                        description: "The location from where to get the weather"
                    }
                },
                required: ["location"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "getLocation",
            description: "Get the user's current location",
            parameters: {
                type: "object",
                properties: {}
            }
        }
    },
]