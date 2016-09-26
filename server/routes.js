import statusRoutes from './routes/status.router.js';

export default (app, router) => {

  // Pass in routes.
  statusRoutes(app, router);

	// Routes are for the API.
	app.use('/api', router);

  // Fallback route for Angular.
  app.get('*', (req, res) => {
    res.send('Hello World!');
  });

};
