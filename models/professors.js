const mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const schema = mongoose.Schema;

const professorSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    qualification: [
      {
        type: String,
      },
    ],
    contacts: [Number],
    email: [String],
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Professor', employeeSchema);
