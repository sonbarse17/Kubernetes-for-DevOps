# Ports Used by Scrum Project Management Application

This document outlines the ports utilized by each microservice and the API gateway in the Scrum Project Management application.

## Service Ports

- **Auth Service**
  - Port: `3001`
  - Description: Handles user authentication and authorization.

- **Project Service**
  - Port: `3002`
  - Description: Manages project-related operations.

- **Task Service**
  - Port: `3003`
  - Description: Manages tasks associated with projects.

- **User Service**
  - Port: `3004`
  - Description: Manages user profiles and information.

- **API Gateway**
  - Port: `3000`
  - Description: Acts as a single entry point for all microservices, routing requests to the appropriate service.

## Summary

Ensure that these ports are available and not blocked by firewalls or other network configurations when deploying the application locally or in a production environment.