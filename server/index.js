import express from 'express';
import http from 'http';

import routes from './routes';

// Init app.
let app = express();
let server = http.createServer(app);
let publicFiles = express.static(__dirname + '/../public');

// Setup router.
let router = express.Router();
routes(app, router, publicFiles);

// Run app.
server.listen(3000);

// Expose app.
export {app};
