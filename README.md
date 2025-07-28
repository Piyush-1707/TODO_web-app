# TODO_web-app
# TODO_APP - Task Management Application

TODO_APP is a React-based task management application designed to help users organize and prioritize their tasks efficiently. The app features a clean and intuitive interface with drag-and-drop functionality to move tasks between different stages: To do, Doing, and Done.

## Key Features

- **Task Creation:** Easily add new tasks with a descriptive title.
- **Urgency Tags:** Assign urgency levels to tasks using color-coded tags (Urgent, High, Medium, Low) to prioritize work effectively.
- **Drag-and-Drop:** Seamlessly move tasks between columns to reflect their current status.
- **Task Deletion:** Remove tasks that are no longer needed.
- **LocalStorage Persistence:** Tasks are saved in the browser's localStorage, ensuring data is retained across sessions.
- **Responsive Design:** The app is built with reusable React components for a smooth user experience.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS Modules
- LocalStorage API

## Project Structure

- `src/components/` - Contains React components such as TaskForm, TaskColumn, TaskCard, Tag, and DropArea.
- `src/App.jsx` - Main application component managing state and rendering task columns.
- `public/` - Static assets including favicon and images.

## Getting Started

To run the application locally:

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000` (or the port specified).

## Live link
https://todo-app-bb833.netlify.app/
