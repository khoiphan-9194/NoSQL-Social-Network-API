const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {getRandomThought,user_Info} = require('./data');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const thoughts = getRandomThought(5);

  await User.collection.insertMany(user_Info);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  //console.table(users);
 
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
