const user_Info = [
  {
      username: 'chodien',
      email: 'chodien@gmail.com',
  },
  {
      username: 'heomap',
      email: 'heomap@gmail.com'
  },
  {
      username: 'cuniu',
      email: 'cuniu@gmail.com'
  },
  {
      username: 'thogia',
      email: 'thogia@gmail.com'
  }

]

const thoughts = [
  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Movie trailers are just the best parts of a movie distilled into 90 seconds',
  'Hello world, this is a comment',
  'Social media is a big waste of time',
  'Notes is my most used app',
  'Messages is open on my computer 24/7',
  'Email is open on my computer',
];

const reactions = [
  'good',
  'bad',
  'amazing',
  'Wow',
  'Excellent',
  'Boring',
];

const getArrLenth = (arr) => {return arr.length};
const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
//console.log(genRandomIndex(thoughts)); //return a Random index based on arr
const getRandomWord = () => `${thoughts[genRandomIndex(thoughts)]}`;
//console.log(getRandomWord()) // this will get a random word based on arr lorum

// const getRandomThought = (words) => {
//   let post = '';
//   for (let i = 0; i < words; i++) {
//     post += ` ${getRandomWord()}\n`;
//   }
//   return post;
// }; // this function will return an array from getRandomWord() based on number of words from the parameter
// console.log("__________________________")
// console.log(getRandomThought(5)); // this will return 3 random words from the getRandomWord()
// console.log("__________________________")


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// console.log(getRandomArrItem(user_Info))
// Gets a random full name
//const getRandomName = () =>
const getRandomUsername =() =>{
  return getRandomArrItem(user_Info);
}

//console.log(getRandomUsername())


// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomThought = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
      results.push({
      thoughtText: getRandomArrItem(thoughts),
      username: getRandomUsername().username,
      reactions: [...getReactions(3)]
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
const getReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(reactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
      username:  getRandomUsername().username,
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomThought,user_Info};
