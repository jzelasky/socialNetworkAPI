// data to seed
    // user model:
        //username,email
        //assign a few random friends
    // thought model:
        //thoughtText, reactionBody -- just use same
        //assign one random username


//username= adjective + noun + 2 digit integer

const adjectives = [
    'gentle',     'late',       'frequent',
    'filthy',     'defeated',   'secretive',
    'obtainable', 'billowy',    'ancient',
    'tender',     'shivering',  'smooth',
    'silly',      'broad',      'naughty',
    'aquatic',    'quickest',   'tremendous',
    'scandalous', 'guarded',    'unarmed',
    'cloudy',     'fearful',    'verdant',
    'thundering', 'changeable', 'even',
    'ordinary',   'ratty',      'nostalgic',
    'melted',     'freezing',   'piquant',
    'silent',     'agreeable',  'slimy',
    'efficient',  'rough',      'questionable',
    'helpful',    'uttermost',  'squalid',
    'annoying',   'alert',      'obviously',
    'exuberant',  'long',       'busy',
    'lewd',       'lovely'
];

const nouns = [
    'psychology',  'method',        'director',
    'perception',  'week',          'salad',
    'emotion',     'leadership',    'teaching',
    'solution',    'theory',        'initiative',
    'employer',    'atmosphere',    'disease',
    'bird',        'equipment',     'virus',
    'youth',       'nation',        'poet',
    'association', 'communication', 'topic',
    'alcohol',     'studio',        'ratio',
    'beer',        'replacement',   'percentage',
    'permission',  'quantity',      'entertainment',
    'bonus',       'advice',        'region',
    'awareness',   'relationship',  'preparation',
    'police',      'surgery',       'revolution',
    'departure',   'throat',        'two',
    'ear',         'dad',           'reality',
    'location',    'king'
];

const sentences = [
    'Her daily goal was to improve on yesterday.',
    "Improve your goldfish's physical fitness by getting him a bicycle.",
    'The random sentence generator generated a random sentence about a random sentence.',
    "She learned that water bottles are no longer just to hold liquid, but they're also status symbols.",
    'In the end, he realized he could see sound and hear words.',
    'The sudden rainstorm washed crocodiles into the ocean.',
    'It took him a while to realize that everything he decided not to change, he was actually choosing.',
    'Some bathing suits just shouldnt be worn by some people.',
    'I like to leave work after my eight-hour tea-break.',
    "A dead duck doesn't fly backward.",
    'They wandered into a strange Tiki bar on the edge of the small beach town.',
    'Last Friday I saw a spotted striped blue worm shake hands with a legless lizard.',
    'As time wore on, simple dog commands turned into full paragraphs explaining why the dog couldn’t do something.',
    'He found the end of the rainbow and was surprised at what he found there.',
    'The heat',
    'The furnace repairman indicated the heating system was acting as an air conditioner.',
    'He had reached the point where he was paranoid about being paranoid.',
    'Her scream silenced the rowdy teenagers.',
    'She found his complete dullness interesting.',
    'He was surprised that his immense laziness was inspirational to others.',
    'She finally understood that grief was her love with no place for it to go.',
    'The underground bunker was filled with chips and candy.',
    'He ran out of money, so he had to stop playing poker.',
    "Separation anxiety is what happens when you can't find your phone.",
    '100 years old is such a young age if you happen to be a bristlecone pine.',
    'Greetings from the real universe.',
    "It took me too long to realize that the ceiling hadn't been painted to look like the sky.",
    "It doesn't sound like that will ever be on my travel list.",
    'Today arrived with a crash of my car through the garage door.',
    'As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts.',
    'Always bring cinnamon buns on a deep-sea diving expedition.',
    'It was the scarcity that fueled his creativity.',
    'Harrold felt confident that nobody would ever suspect his spy pigeon.',
    'If you really strain your ears, you can just about hear the sound of no one giving a damn.',
    'A quiet house is nice until you are ordered to stay in it for months.',
    'Despite what your teacher may have told you, there is a wrong way to wield a lasso.',
    "Gary didn't understand why Doug went upstairs to get one dollar bills when he invited him to go cow tipping.",
    "Art doesn't have to be intentional.",
    'The water flowing down the river didnt look that powerful from the car',
    'Car safety systems have come a long way, but he was out to prove they could be outsmarted.',
    'Purple is the best city in the forest.',
    'Red is greener than purple, for sure.',
    'Being unacquainted with the chief raccoon was harming his prospects for promotion.',
    'Before he moved to the inner city, he had always believed that security complexes were psychological.',
    'They say people remember important moments in their life well, yet no one even remembers their own birth.',
    'Jason lived his life by the motto, "Anything worth doing is worth doing poorly.',
    'The two walked down the slot canyon oblivious to the sound of thunder in the distance.',
    'It was obvious she was hot, sweaty, and tired.',
    'The secret ingredient to his wonderful life was crime.',
    'They were excited to see their first sloth.'
]


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () => { 
    return getRandomArrItem(adjectives) + getRandomArrItem(nouns) + Math.floor(Math.random() * 100);
};

const getRandomText = () => getRandomArrItem(sentences);

module.exports = { getRandomUsername, getRandomText, getRandomArrItem}
