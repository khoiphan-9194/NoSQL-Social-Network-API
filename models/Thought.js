const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText:
    {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },

    createdAt:
    {
      type: Date,
      default: Date.now,
      get: timestamp => new Date(timestamp).toLocaleString().split(',')[0],
    },

    username: //The user that created this thought
    {
      type: String,
      required: true,
    },

    reactions: [reactionSchema] //Array of nested documents created with the reactionSchema

  },

  {
    toJSON:
    {
      getters: true,
    },
    id: false,
  }
);
//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema
  .virtual('reactionCount ')
  // Getter
  .get(function () {
    return this.reactions.length;
  })

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
