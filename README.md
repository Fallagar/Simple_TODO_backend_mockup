# TODO API

This project implements a simple API for managing notes. It provides endpoints to create, retrieve, update, and delete notes, as well as retrieve aggregated data statistics.

## Getting Started

To get started with the project, follow these steps:

1. Install project dependencies:

   npm install

2. Start the development server using nodemon:

   npm run start:nodemon

# API Endpoints

# Create a Note

Endpoint: POST /notes <br />
Action: Create a note object. <br />
Request Body: Send the note data in x-www-form-urlencoded format. Required fields: name, category, content

# Delete a Note

Endpoint: DELETE /notes/:id <br />
Action: Remove an item. <br />
Parameters: Replace :id with the ID of the note to delete.

# Update a Note

Endpoint: PATCH /notes/:id <br />
Action: Edit an item. <br />
Parameters: Replace :id with the ID of the note to update. <br />
Request Body: Send the updated note data in x-www-form-urlencoded format. Accepted fields: name, category, content, status

# Retrieve a Note

Endpoint: GET /notes/:id <br />
Action: Retrieve an item. <br />
Parameters: Replace :id with the ID of the note to retrieve.

# Retrieve All Notes

Endpoint: GET /notes <br />
Action: Get all notes. <br />

# Aggregated Data Statistics

Endpoint: GET /notes/stats <br />
Action: Get aggregated data statistics. <br />
Note: The statistics are calculated based on the notes objects.

# Testing with Postman

You can test the API endpoints using a tool like Postman. Use the x-www-form-urlencoded format for testing. Make sure to provide the required data for each request.
