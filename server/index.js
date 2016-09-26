import express from 'express';
import http from 'http';

import routes from './routes';

// Init app.
let app = express();
let server = http.createServer(app);

// Setup router.
let router = express.Router();
routes(app, router);

// Run app.
server.listen(3000);

// Expose app.
export {app};
