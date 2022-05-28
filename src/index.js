import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TaskProvider from './context/taskContext';
import ThemeProvider from './context/themeContext';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <TaskProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TaskProvider>
  </ThemeProvider>
);

