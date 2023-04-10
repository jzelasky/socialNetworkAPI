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
        const thought = getRandomText();
        
        users.push({
            username,
            email,
            thought
        })

        thoughts.push({
            username,
            thought
        })
    }


    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});