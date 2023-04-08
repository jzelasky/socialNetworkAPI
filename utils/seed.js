const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomText, getRandomArrItem } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const thoughts = [];

    for (let i=0; i < 20; i++){
        const username = getRandomUsername();
        const email = username + '@email.com';
        
        users.push({
            username,
            email
        })
    }

    for (let i=0; i < 35; i++){
        const thought = getRandomText();
        const user = getRandomArrItem(users);
        const username = user.username;

        thoughts.push({
            thought,
            username
        })
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts)
    console.info('Seeding complete! 🌱');
    process.exit(0);
});