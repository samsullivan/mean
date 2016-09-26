import Status from '../models/status.model';

export default (app, router) => {

  router.route('/status')
    .get((req, res) => {
      res.json({status: Status.color});
    });

};
