# Phonebook

Phonebook is a web application that allows users to securely store, manage, and
organize their contacts. Built with modern technologies like React, Redux, and
Material UI, it ensures a responsive user experience with robust functionality.

## Features

- User registration and login
- Add, edit, and delete contacts
- Search for contacts
- Responsive design for mobile and desktop
- API integration with persistent data storage

## Technologies Used

- React
- Redux Toolkit
- Redux Persist
- React Router
- Axios
- Styled Components
- Material UI
- REST API

## Setup and Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/maxexc/phonebook.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file at the root of the project with the following variable:

   ```bash
   REACT_APP_API_URL=https://connections-api.goit.global/
   ```

4. Run the project:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the
   browser.

## Deployment

The project is deployed using GitHub Pages. Follow these steps to deploy:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages using GitHub Actions: Ensure that the correct base URL
   is set in `BrowserRouter` if deploying to a subdirectory.

3. Visit your deployed application at:  
   [Live Demo](https://maxexc.github.io/phonebook)

## Contribution

Feel free to submit issues and pull requests to improve this project.

## License

This project is licensed under the MIT License.

