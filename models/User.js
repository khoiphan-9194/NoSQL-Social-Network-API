const { Schema, Types, model } = require('mongoose');

// Schema to create User model

//this function will validate email input
const validateEmail = function(email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const userSchema = new Schema(
  {
    username:
    {
      type: String,
      unique: true,
      required: true,
      trim: true
    },

    email: //Must match a valid email address
    {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, "Please enter a valid email"]
    },

    thoughts: //Array of _id values referencing the Thought model
    [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],

    friends: //Array of _id values referencing the User model (self-reference)
    [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
    
  }, 
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// Create a virtual property `friendCount ` that g that retrieves the length of the user's friends array field on query.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })


// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
