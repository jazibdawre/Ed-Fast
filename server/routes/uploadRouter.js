// import dependancies
const express = require('express');
const { truncateSync } = require('fs');
const multer = require('multer');

const authenticate = require('../middleware/auth');
const Courses = require('../models/courses');
const uploadRouter = express.Router();

// multer middleware -- (Subject to reloactaion)

// Dealing with video storage on server side
const storage = multer.diskStorage({
  // specifying path of file where video will be saved
  destination: (req, file, cb) => {
    cb(null, '../uploads/');
  },
  // making sure file uploaded is a .mp4 file
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.mp4') {
      return cb(res.status(400).end('Only .Mp4 Allowed'), false);
    }
    cb(null, true);
  },
  filename: (req, file, cb) => {
    // replacing blank spaces in teh file name
    cb(null, file.originalname.replace(/ /g, '_'));
  },
});

// handling constraints
const upload = multer({
  storage: storage,
  // file size limit to 200mb temporarily
  limits: {
    fileSize: 1024 * 1024 * 200, // 200 MB
  },
}).single('file');

// port which receives the video
uploadRouter.post(
  '/uploadFile',
  // only admin/proffessor can make videos
  authenticate.verifyAdmin,
  (req, res, next) => {
    upload(req, res, (err) => {
      if (err) {
        return res.json({ success: false, err });
      }
      return res.json({
        succes: true,
        filePath: res.req.file.path,
        fileName: res.req.file.fileName,
      });
    });
  }
);

// Add Files details to mongoose collection
uploadRouter
  .post('/video', authenticate.verifyAdmin, (req, res) => {
    Courses.findByIdAndUpdate(
      req.body.courseID,
      { video: req.body.video },
      { new: true }
    )
      .then(() =>
        res.json({ success: true, msg: 'Course Updated Successfully' })
      )
      .catch((err) => res.json({ success: false, error: err }));
  })

  // details of a particular file
  .get('/video/:id', authenticate.verifyUser, (req, res) => {
    /*
    Courses.findOne(req.params.courseID)
      .populate('video')
      .exec()
      .then((foundCourse) => {
        foundCourse
          .findOne(req.params.id)
          .then((foundVideo) => {
            res.json({ success: true, msg: 'Video Found!', foundVideo });
          })
          .catch((error) =>
            res.json({ success: false, msg: 'Video Not Found' })
          );
      })
      .catch((err) => {
        res.json({ success: false, error: err });
      });
      */
    Courses.findById(req.params.courseId)
      .then(
        (course) => {
          // if course has been found and a weekID ahs been entered
          if (course != null && course.weeks.id(req.params.weekId) != null) {
            if (course.professors[0]._id.equals(req.user.details._id)) {
              if (req.body.video) {
                res.json({ success: true, video: req.body.video });
              } else {
                res.json({ success: false, error: 'Video Not Found' });
              }
              course
                .save()
                .then(() =>
                  res.json({
                    success: true,
                    msg: 'Video Found',
                    video: req.body.video,
                  })
                )
                .catch((error) => {
                  res.json({ success: false, error: error });
                });
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
  });

module.exports = uploadRouter;
