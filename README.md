# Proyecto Final para la cursada de REACT JS  de CODERHOUSE

## Acerca del proyecto: **La Glorieta**

**La Glorieta** busca *emular un proyecto de e-commerce de venta de pinturas decorativas.*\
Su principal objetivo es la venta de impresiones en bastidor, papel o hasta esculturas u otro tipo de artefactos o productos.\

### Datos tecnicos

Hasta el momento, **"la Glorieta"** es una app web desarrollada en su totalidad dentro de ReactJS.
Dependencias utilizadas hasta el momento:

- "Bootstrap V5" referenciada por CDN en index.html
- "react": "17.0.2", instalado por npm
- "react-router-dom": "5.2",
- "firebase": "9.6.1", como simulador de base de datos

Hasta el momento se testeó en navegadores: 
- Google Chrome  
- Microsoft Edge
- Mozilla Firefox 

### Instrucciones de Navegacion

1. El home consta de un simple Navbar que va a permanecer siempre visible en todas las secciones y la lista de items que.\
se encuentren registrados en la base de datos de **Firebase**.
2. En el *NavBar* tendremos el nombre de la marca la cual hara de boton al home. Luego tendremos los 3 filtros de categorías de productos,\
y por ultimo estara el *CartWidget*. El mismo estara transparente si no hay productos en el carrito y aparecera en negro cuando los haya.\
Además podremos ver que cantidad total de productos tenemos. Si clickeamos en dicho numero el carrito se va a vaciar. Si clickeamos en el\
icono de carrito cargaremos la pagina del *Cart* con el detalle de la compra.
3. En el *ItemList* tendremos la lista de items cada uno con su tarjeta en la cual hay una breve descripcion y una invitacion a ver el detalle\
donde se podra agregar al carrito.
4. En el *ItemDetail* podremos ver la informacion del item correspondiente. Titulo, autor, formato, stock, precio etc. Ahi podremos elegir tambien \
cantidad a comprar y agregarlo al carrito. Si el item esta en el carrito ya no se podran agregar mas y el contador sera reemplazado por el boton\
para finalizar la compra que nos llevara al *Cart*.(podemos volver al Home o a los distintos productos filtrados desde los botones del *NavBar*)\
5. En el *Cart* veremos una lista con los distintos *Items* que añadimos al *Cart* Podremos eliminar un item especifico o ver su detalle si hacemos\
click en la imagen del mismo. Abajo de todo podremos vaciar todo el carrito, haciendo click en el tacho, o\
volver al Home para seguir comprando. Por otro lado, de la derecha. Tendremos el total del costo de nuestra compra y un formulario que generara la\
orden de compra para el usuario. Una vez recibida nos mostrara un mensaje de agradecimiento y al confirmarlo se retornara al Home.\ 

### vista previa actual del funcionamiento: https://vimeo.com/655614263/9902f59490
----------------------------------------------------------------------------------------------------------
    -React NPM default instructions-
----------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
