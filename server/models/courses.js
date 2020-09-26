const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reviewSchema = new schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const videoSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    video: {
      //Path to video
      type: String,
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Professor',
    },
  },
  {
    timestamps: true,
  }
);

const weekSchema = new schema(
  {
    weekno: {
      type: Number,
      required: true,
    },
    videos: [videoSchema],
    theory: [
      {
        title: String,
        description: String,
      },
    ],
    quiz: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
      },
    ],
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const courseSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    professors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor',
      },
    ],
    startdate: {
      type: Date,
      required: true,
    },
    reviews: [reviewSchema],
    weeks: [weekSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Course', courseSchema);
