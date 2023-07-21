# SocialApp

# Introduction
Welcome to SocialApp, a social media application that allows users to connect, share, and interact with each other through posts, likes, and comments. This application is built with modern technologies, providing a seamless user experience and real-time updates.

# Contributors
Jackilyn Tan
Taina Barreau
Davis Cedrick Baseka
Theresa Olusoga
Walsh Vas

# Features

# User Registration and Login
Users can easily register and log in to the application using their email, username, and password.
The authentication mechanisms are handled securely with JSON Web Tokens (JWT), ensuring user data remains private.
# Post Creation
Authenticated users can create new posts and share their thoughts with the community.
Posts are stored in the MongoDB database using Mongoose as the ODM library.
# Post Interaction
Users can view posts, like posts, and comment on posts, fostering engagement and interaction among community members.
The application provides various GraphQL mutations, such as getPost, getPosts, likePost, createComment, and deleteComment, to enable seamless post interaction.
# Real-Time Updates (Subscriptions)
SocialApp supports real-time updates for new posts through GraphQL subscriptions.
The newPost subscription is implemented using the PubSub class from graphql-subscriptions in the index.js file, allowing users to receive instant updates as new posts are created.
# Authentication and Authorization
SocialApp ensures secure authentication and authorization using JSON Web Tokens (JWT).
The checkAuth.js file is integrated into various resolver functions to verify and decode JWT tokens, ensuring that only authenticated users can perform specific actions.

# Backend Technologies Used
GraphQL
SocialApp's backend utilizes GraphQL, a powerful query language for APIs, to facilitate efficient data retrieval and manipulation.
Apollo Server
The backend is built using Apollo Server, a GraphQL server implementation that enables seamless data fetching and mutation handling.
MongoDB and Mongoose
SocialApp interacts with a MongoDB database to store user data, posts, comments, and likes.
Mongoose, an Object Data Modeling (ODM) library, is employed to define schemas and models for the User and Post collections.
JSON Web Tokens (JWT)
Authentication and authorization are achieved through the use of JSON Web Tokens (JWT).
Users are issued tokens upon successful login, allowing them to perform authorized actions within the application.
Frontend Integration
React
SocialApp's frontend is built using React, a popular JavaScript library for building user interfaces.
The use of React ensures a smooth and interactive user experience.
Apollo Client and GraphQL Client Libraries
The frontend communicates with the backend API through Apollo Client, simplifying data management and state handling.
GraphQL client libraries facilitate efficient communication between the frontend and the GraphQL backend.
Getting Started
Clone the repository from [GitHub Repo URL].
Navigate to the project directory in your terminal.
Install the necessary dependencies by running: npm install.
Launch the backend server by running: npm start.
In a separate terminal, navigate to the frontend directory.
Install the frontend dependencies by running: npm install.
Start the frontend application by running: npm start.
Now, SocialApp should be up and running! Access the application through your web browser, and start exploring the exciting world of social networking.

Contribution Guidelines
We welcome contributions from the community to enhance SocialApp and make it even better. If you'd like to contribute, please follow these guidelines:

Fork the repository and create a new branch for your feature or bug fix.
Ensure your code follows the project's coding standards and conventions.
Write clear and concise commit messages for each change.
Submit a pull request to the main repository, describing the changes you've made.
Reporting Issues
If you encounter any bugs or issues while using SocialApp, please open a new issue on the GitHub repository. We appreciate your feedback and will work to resolve any problems promptly.

License
SocialApp is released under the MIT License, allowing you to use, modify, and distribute the code freely.

Acknowledgments
We would like to express our gratitude to the open-source community for providing valuable tools and resources that made the development of SocialApp possible.

Thank you for using SocialApp! Happy networking!
