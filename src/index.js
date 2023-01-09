import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const element = React.createElement("div", { id: "identify", className: "container" }, "First React Code!");
const container = document.getElementById('root');

// ReactDOM.render is no longer supported in React 18.
// ReactDOM.render(element, container);

// Use createRoot instead ReactDOM.render
const root = createRoot(container);
root.render(element);