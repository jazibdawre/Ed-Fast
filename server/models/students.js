const mongoose = require('mongoose');
const schema = mongoose.Schema;

const gradeSchema = new schema(
  {
    grade: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
    },
  },
  {
    timestamps: true,
  }
);

const studentSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    contacts: [Number],
    email: [String],
    institute: {
      type: String,
      required: true,
    },
    gradyear: {
      type: Number,
    },
    grades: [gradeSchema],
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Student', studentSchema);
