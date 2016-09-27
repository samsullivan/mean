import statusRoutes from './routes/status.router.js';

export default (app, router, publicFiles) => {

  // Pass in routes.
  statusRoutes(app, router);

  // Routes are for the API.
  app.use('/api', router);

  // Access public files.
  app.use(publicFiles);

  // Fallback route for Angular.
  app.get('*', (req, res) => {
    let rootPath = __dirname + '/../';
    res.sendFile('/public/dist/index.html', {root: rootPath});
  });

};
