var express = require('express');
const Professors = require('../models/professors');

var authenticate = require('../authenticate');

var professorRouter = express.Router();

professorRouter
  .route('/')
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const professors = await Professors.find({}).populate('projects');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(professors);
    } catch (error) {
      next(error);
    }
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /professors');
  })
  .post(authenticate.verifyUser, async (req, res, next) => {
    try {
      const professor = await Professors.create(req.body);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(professor);
    } catch (error) {
      next(error);
    }
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /professors');
  });

professorRouter
  .route('/:professorId')
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const professor = await Professors.findById(
        req.params.professorId
      ).populate('projects');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(professor);
    } catch (error) {
      next(error);
    }
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      'POST operation not supported on /professors/' + req.params.professorId
    );
  })
  .put(authenticate.verifyUser, async (req, res, next) => {
    try {
      const professor = await Professors.findByIdAndUpdate(
        req.params.professorId,
        { $set: req.body },
        { new: true }
      ); //new returns the modified professor data
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(professor);
    } catch (error) {
      next(error);
    }
  })
  .delete(
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const resp = await Professors.findByIdAndRemove(req.params.professorId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      } catch (error) {
        next(error);
      }
    }
  );

module.exports = professorRouter;
