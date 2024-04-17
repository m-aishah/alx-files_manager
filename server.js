import express from 'express';
import startServer from './libs/boot';
import injectRoutes from './routes';
import injectMiddlewares from './libs/middlewares';

const server = express();

injectMiddlewares(server);
// Load routes from routes/index.js
injectRoutes(server);

// Set port, Start the server
startServer(server);

export default server;
