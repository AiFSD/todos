// main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './TodoApp';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<TodoApp />
);

