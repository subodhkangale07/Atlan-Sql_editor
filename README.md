# SQL Query Runner

![Screenshot 2025-03-27 000409](https://github.com/user-attachments/assets/683da2dd-a595-422c-b497-34d0c71f957c)

A web-based SQL query runner application built for the Atlan Frontend Internship Task. This application simulates SQL query execution with syntax highlighting and result visualization.

## Overview

This project is a simple yet powerful SQL query execution simulator that allows users to write, execute, and visualize SQL queries within a web-based interface. It features a syntax-highlighted editor, query history tracking, and a database schema viewer to help users understand and interact with database structures efficiently.

## JavaScript Framework and Dependencies

- **Framework:** React 18.x
- **Major Plugins and Packages:**
  - `prismjs` (for syntax highlighting)
  - `react-syntax-highlighter` (for enhanced code display)
  - `react-table` (for rendering query results efficiently)
  - `styled-components` (for better component styling and theming)

## Features

- ✨ **SQL Editor with Syntax Highlighting**
  - Real-time SQL syntax highlighting
  - Keyboard shortcuts (Ctrl+Enter to execute)
  - Sample queries dropdown

- 📊 **Results Visualization**
  - Tabular display of query results
  - Execution time and row count metrics
  - Responsive table design

- ⏳ **Query History**
  - Track previously executed queries
  - Click to re-run historical queries

- 🗃️ **Database Schema Viewer**
  - Visualize table structures
  - View column types and descriptions

- 🌓 **UI Customization**
  - Dark/Light theme toggle
  - Responsive design for all devices

## Page Load Time & Measurement

- **Measured Load Time:** ~1.2 seconds
- **Measurement Tool:** Chrome DevTools Performance tab
- **Testing Method:**
  - Opened the application in Incognito Mode to avoid cache interference
  - Used Lighthouse and DevTools to analyze rendering and execution speed
  - Measured the time from navigation start to the full page load

## Performance Optimizations

To ensure a fast and smooth experience, we implemented the following optimizations:

- **Code Splitting:**
  - Implemented lazy loading for heavy components using `React.lazy` and `Suspense`.
- **Efficient Component Rendering:**
  - Used memoization with `React.memo` to prevent unnecessary re-renders.
  - Optimized state management with React's `useReducer` for complex state handling.
- **Minimal Dependencies:**
  - Used lightweight libraries and removed unnecessary dependencies.
- **Optimized Asset Delivery:**
  - Compressed images and minimized CSS and JavaScript bundles.
  - Used gzip compression in production builds.

## Live Demo

[View deployed application](https://atlan-sql-editor-c8v6vunjl-subodhs-projects-22110ac3.vercel.app/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sql-query-runner.git
   cd sql-query-runner
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
src/
├── components/            # React components
│   ├── CodeEditor.jsx     # SQL editor with highlighting
│   ├── QueryHistory.jsx   # Query history panel
│   ├── ResultsTable.jsx   # Results display component
│   ├── SavedQueries.jsx   # Sample queries component
│   ├── SchemaViewer.jsx   # Database schema viewer
│   └── ThemeToggle.jsx    # Dark/light mode toggle
├── data/
│   └── sampleData.js      # Sample queries and results
├── styles/
│   ├── App.css            # Main styles
│   └── themes.css         # Theme-specific styles
├── App.js                 # Main application component
└── index.js               # Entry point
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (advanced)

## Testing the Application

Try these sample queries:

```sql
-- Basic SELECT
SELECT * FROM employees;

-- Filtering with WHERE
SELECT name, salary FROM employees WHERE salary > 90000;

-- Aggregation
SELECT department, COUNT(*) AS employee_count 
FROM employees 
GROUP BY department;

-- JOIN between tables
SELECT e.name, d.budget 
FROM employees e 
JOIN departments d ON e.department = d.name;
```

## Deployment

The app can be deployed to any static hosting service:

### Vercel:
```bash
vercel
```

### Netlify:
- Drag and drop your build folder to Netlify

### GitHub Pages:
```bash
npm install -g gh-pages
npm run deploy
```

## Future Improvements

- Add actual SQL parser and executor
- Implement query validation
- Support for saving custom queries
- Export results to CSV/Excel
- Add user authentication

## License

MIT License

