import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* 3. Herramientas para trabajar con React

Instalar node: ver la versión node –v
Versión npm: npm –v
Usar la herramienta https://github.com/facebook/create-react-app
Con esta herramientas, estarán las dependencias de React, archivo de webpack y viene todo listo para comenzar un proyecto de React en 5 minutos
npx create-react-app my-app
ir a la carpeta cd prestamo
npm start
Compiled successfully!

You can now view prestamo in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.35:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

Se abrirá chrome con la página principal
Nota: Tiene que estar alejado de otros proyectos que utilicen node, para que no de conflictos
Instalación extensión de chrome: React Developer Tools
En public – index.html – agregar – normalize – y - skeleton */
