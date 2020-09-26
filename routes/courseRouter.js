var express = require('express');
const Courses = require('../models/courses');

var authenticate = require('../authenticate');

var courseRouter = express.Router();

courseRouter
  .route('/')
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const courses = await Courses.find({}).populate(
        'students professors reviews.author'
      );
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(courses);
    } catch (error) {
      next(error);
    }
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /courses');
  })
  .post(authenticate.verifyUser, async (req, res, next) => {
    try {
      const course = await Courses.create(req.body);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(course);
    } catch (error) {
      next(error);
    }
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /courses');
  });

courseRouter
  .route('/:courseId')
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const course = await Courses.findById(req.params.courseId).populate(
        'students professors reviews.author'
      );
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(course);
    } catch (error) {
      next(error);
    }
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /courses/' + req.params.courseId);
  })
  .put(authenticate.verifyUser, async (req, res, next) => {
    try {
      const course = await Courses.findByIdAndUpdate(
        req.params.courseId,
        { $set: req.body },
        { new: true }
      ); //new returns the modified course data
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(course);
    } catch (error) {
      next(error);
    }
  })
  .delete(
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    async (req, res, next) => {
      try {
        const resp = await Courses.findByIdAndRemove(req.params.courseId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      } catch (error) {
        next(error);
      }
    }
  );

module.exports = courseRouter;
