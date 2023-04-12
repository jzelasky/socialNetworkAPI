# Social Network API

## Description

Social networking websites have become very popular. This application serves as the backend for a simple social networking site. There is functionality for creating, editing, and deleting users and creating "friendships" between users. Users can post "thoughts" and "reactions" to thoughts. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Installation

Note: User must have Node.js, mongoDB, and an API development platform (like Insomnia or Postman) installed on their device to use this application.

To install this project download or clone this repository. Open the application in your terminal and run `npm i` to install the necessary node packages. If you would like some seed users to get started, run `npm run seed` (this is optional).

## Usage

To start the application, run `npm start` in your terminal. Navigate to your preferred API development platform (the walktrhough video uses Insomnia). The following routes are available to interact with:

`localhost:3001/api`

* `/users`                          GET/POST
* `/users/:userId`                  GET/PUT/DELETE
* `/users/:userId/friends`          POST
* `/users/:userId/friends/friendId` DELETE
* `/thoughts`                       GET/POST
* `/thoughts/:thoughtId`            GET/PUT/DELETE
* `/thoughts/:thoughtId/reactions`  POST


POST and PUT body (JSON) for `/users` and `/users/:userId` routes: 
        
        {"username": "...", "email": "..."}

POST body (JSON) for `/users/:userId/friends` route: 
        
        {"userId": "..."}

POST and PUT body (JSON) for `/thoughts` routes: 
        
        {"thoughtText": "...", "username": "..."}

POST body (JSON) for `/thoughts/:thoughtId/reactions` routes: 
        
        {"reactionBody": "...", "username": "..."}


Click [here](https://drive.google.com/file/d/1gptuZGG7A2zi9zxLQyJMO2Nk8Z1mhNYf/view) for a video walkthrough of the application. 

## Contact

For any questions or comments about this project please contact:

github.com/jzelasky

jzelasky@gmail.com
