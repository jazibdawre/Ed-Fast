const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  // name of the quiz
  name: {
    type: String,
    default: 'Quiz',
  },

  // [!!!!] which course it belongs to
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },

  // difficulty level - easy, Medium, Hard
  difficulty: {
    type: String,
    default: 'medium',
  },

  // multiple questions
  question: [
    {
      // question
      questionStatement: {
        type: String,
        required: true,
      },
      // multiple options
      options: [
        {
          // what the option states
          optionContent: {
            type: String,
            required: true,
          },

          // whether entered option is the answer or not
          answer: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('Quiz', quizSchema);
