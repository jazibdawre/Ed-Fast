var express = require('express');
const Courses = require('../models/courses');

var authenticate = require('../middleware/auth');

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

//[!] Week specific stuff
courseRouter
  .route('/:courseId/week')
  .get((req, res, next) => {
    Courses.findById(req.params.courseId)
      .populate('students professors reviews.author')
      .then(
        (course) => {
          if (course != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(course.weeks);
          } else {
            err = new Error('Course ' + req.params.courseId + ' NOT found');
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end(
      'PUT operation not supported on /courses/' +
        req.params.courseId +
        '/week/'
    );
  })
  .post(authenticate.verifyUser, (req, res, next) => {
    Courses.findById(req.params.courseId)
      .then(
        (course) => {
          if (course != null) {
            //loop for each professor
            if ((course.professors[0]._id = req.user.details._id)) {
              course.weeks.push(req.body);
              course.save().then(
                (course) => {
                  Courses.findById(course._id)
                    .populate('students professors reviews.author')
                    .then((course) => {
                      res.statusCode = 200;
                      res.setHeader('Content-Type', 'application/json');
                      res.json(course);
                    });
                },
                (err) => next(err)
              );
            } else {
              err = new Error('Only course owner is allowed to add weeks');
              err.status = 403;
              return next(err);
            }
          } else {
            err = new Error('Course ' + req.params.courseId + ' NOT found');
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      Courses.findById(req.params.courseId)
        .then(
          (course) => {
            if (course != null) {
              for (var i = course.weeks.length - 1; i >= 0; i--) {
                course.weeks.id(course.weeks[i]._id).remove();
              }
              course.save().then(
                (course) => {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.json(course);
                },
                (err) => next(err)
              );
            } else {
              err = new Error('Course ' + req.params.courseId + ' NOT found');
              err.status = 404;
              return next(err);
            }
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
  );

courseRouter
  .route('/:courseId/week/:weekId')
  .get((req, res, next) => {
    Courses.findById(req.params.courseId)
      .populate('students professors reviews.author')
      .then(
        (course) => {
          if (course != null && course.weeks.id(req.params.weekId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(course.weeks.id(req.params.weekId));
          } else if (course == null) {
            err = new Error('Course ' + req.params.courseId + ' NOT found');
            err.status = 404;
            return next(err);
          } else {
            err = new Error('Week ' + req.params.weekId + ' NOT found');
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end(
      'POST operation not supported on /courses/' +
        req.params.courseId +
        '/week/' +
        req.params.weekId
    );
  })
  .put(authenticate.verifyUser, (req, res, next) => {
    Courses.findById(req.params.courseId)
      .then(
        (course) => {
          if (course != null && course.weeks.id(req.params.weekId) != null) {
            if (course.professors[0]._id.equals(req.user.details._id)) {
              if (req.body.video) {
                //Add video here
              }
              course.save().then(
                (course) => {
                  Courses.findById(course._id)
                    .populate('students professors reviews.author')
                    .then((course) => {
                      res.statusCode = 200;
                      res.setHeader('Content-Type', 'application/json');
                      res.json(course);
                    });
                },
                (err) => next(err)
              );
            } else {
              err = new Error("Cannot Edit someone Else's week");
              err.status = 403;
              return next(err);
            }
          } else if (course == null) {
            err = new Error('Course ' + req.params.courseId + ' NOT found');
            err.status = 404;
            return next(err);
          } else {
            err = new Error('Week ' + req.params.weekId + ' NOT found');
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(authenticate.verifyUser, (req, res, next) => {
    Courses.findById(req.params.courseId)
      .then(
        (course) => {
          if (course != null && course.weeks.id(req.params.weekId) != null) {
            if (course.professors[0]._id.equals(req.user.details._id)) {
              course.weeks.id(req.params.weekId).remove();
              course.save().then(
                (course) => {
                  Courses.findById(course._id)
                    .populate('students professors reviews.author')
                    .then((course) => {
                      res.statusCode = 200;
                      res.setHeader('Content-Type', 'application/json');
                      res.json(course);
                    });
                },
                (err) => next(err)
              );
            } else {
              err = new Error("Cannot Delete someone Else's week");
              err.status = 403;
              return next(err);
            }
          } else if (course == null) {
            err = new Error('Course ' + req.params.courseId + ' NOT found');
            err.status = 404;
            return next(err);
          } else {
            err = new Error('Week ' + req.params.weekId + ' NOT found');
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = courseRouter;
