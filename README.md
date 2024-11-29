API Data Processor

This project is a Node.js application that fetches data from an API, processes it, and saves the processed data to a JSON file with a dynamic file name. The file name is derived from the URL, including optional enhancements like a timestamp or other relevant data properties.


Features
.Fetches data from a specified API URL.
.Dynamically identifies arrays of objects within the API response.
.Processes data by adding metadata (processedAt timestamp).
.Dynamically generates a file name from the API URL and ensures it is unique.
.Saves the processed data as a JSON file.

Setup
1. Prerequisites
Node.js: Ensure Node.js is installed. You can download it from Node.js Official Site.
2. Install Dependencies
After cloning or downloading the repository, navigate to the project folder and run:
npm install axios

Usage
Run the Script
Update the API URL in the script (e.g., https://api.example.com/data) and then run:
node index.js

File Name Convention
The JSON file name is dynamically generated based on the API URL. Here are the rules:

The file name is derived from the last segment of the URL.
Example: For https://api.example.com/data, the file will be named data.json.
If the URL ends with a trailing slash (e.g., https://api.example.com/), the file name defaults to default.json.
If no .json extension exists in the derived name, it is appended automatically.

Error Handling
Logs errors if the API request fails.
Ensures data processing continues even if no valid arrays are found.
Handles invalid URLs gracefully by defaulting to default.json.

Future Enhancements
Support for additional HTTP methods (POST, PUT, DELETE).
Add data validation and transformation pipelines.
Include logging and performance metrics.
