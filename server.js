import express from 'express';
import startServer from './libs/boot';
import injectRoutes from './routes';

const server = express();

// Load routes from routes/index.js
injectRoutes(server);

// Set port, Start the server
startServer(server);

export default server;
