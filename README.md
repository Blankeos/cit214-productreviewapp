# ☕ Cafe.ly | A Coffee Review Site

> 🔗 [cafely-vercel-test-blankeos.vercel.app](https://cafely-vercel-test-blankeos.vercel.app)

<img src="https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/meta/preview.jpg" alt="Site Preview Screenshot">

Cafe.ly is a review site like Yelp, IMDB, Metacritic, or RottenTomatoes, but for ☕**Coffee**! This is our finals project for CIT 214 Software Engineering.

## Architecture

Cafe.ly is a _full-stack web-application_ project deployed on Vercel that makes use of a **serverless architecture**. It's overkill but the website is constructured with the MERN Stack in mind. As such, the website is built with MongoDB, Express, and ReactJS. However, Express is exported as a serverless function for the backend without the need for NodeJS for its APIs which is located in the `/api` folder.

### Front-End

1. :atom_symbol: ReactJS
2. <img src="https://simpleicons.org//icons/tailwindcss.svg" alt="drawing" width="16px"/> Tailwind

### Back-End & Database

1. <img src="https://simpleicons.org/icons/express.svg" alt="drawing" width="16px"/> Express (Exported as a serverless function)
2. 🔥 Firebase (Authentication)
3. 🍃 MongoDB (Real-time database)
4. <img src="https://simpleicons.org/icons/vercel.svg" alt="drawing" width="16px"/> Vercel (Deployment)

## Group Members

```json
1. 👧 Caguan, Xyphrus Von
2. 🐵 Carbonilla, Gene Caleb
3. 🤩 Maglalang, Jiezel
4. 🤠 Rubinos, Christopher Joseph
5. 🤡 Remigio, Zhyray
6. 😎 Taleon, Carlo Antonio
```

<hr>

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
