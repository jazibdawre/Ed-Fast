var express = require('express');
const Students = require('../models/students');

var authenticate = require('../authenticate');

var studentRouter = express.Router();

studentRouter
  .route('/')
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const students = await Students.find({}).populate('courses grades.quiz');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(students);
    } catch (error) {
      next(error);
    }
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /students');
  })
  .post(authenticate.verifyUser, async (req, res, next) => {
    try {
      const student = await Students.create(req.body);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(student);
    } catch (error) {
      next(error);
    }
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /students');
  });

studentRouter
  .route('/:studentId')
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const student = await Students.findById(req.params.studentId).populate(
        'courses grades.quiz'
      );
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(student);
    } catch (error) {
      next(error);
    }
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      'POST operation not supported on /students/' + req.params.studentId
    );
  })
  .put(authenticate.verifyUser, async (req, res, next) => {
    try {
      const student = await Students.findByIdAndUpdate(
        req.params.studentId,
        { $set: req.body },
        { new: true }
      ); //new returns the modified student data
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(student);
    } catch (error) {
      next(error);
    }
  })
  .delete(
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const resp = await Students.findByIdAndRemove(req.params.studentId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      } catch (error) {
        next(error);
      }
    }
  );

module.exports = studentRouter;
