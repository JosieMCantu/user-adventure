
const water = {
    id: 'water',
    title: 'Fresh pool of Water',
    map: {
        top: '89%', // for where it shows on page
        left: '44%'
    },
    image: '../assets/water.png',
    description: `
        You've come to gather powerful water for your spell from a beautiful fresh pool. 
        But you encounter a water serpent protecting it's magic filled pool. What do you do?
    `,
    choices: [{
        id: 'pay',
        description: 'Pay off the serpent.',
        result: `
            Serpents are very smart and it could destroy you swiftly but you would have to give up
            your peace of mind giving away your magical freedom.
        `,
        peace: 0,
        power: 35
    }, {
        id: 'steal',
        description: 'Steal the water without the serpent noticing.',
        result: `
            You sneak into the powerful pool taking your precious ingredient but getting too tired
            to fly.
        `,
        peace: -30,
        power: 50
    }, {
        id: 'leave',
        description: 'Leave the water and serpent alone.',
        result: `
            You leave the water and serpent behind losing 10 peace of mind points.
        `,
        peace: -10,
        power: 0
    }]
};

const earth = {
    id: 'earth',
    title: 'A beautiful Forest',
    map: {
        top: '89%', // for where it shows on page
        left: '44%'
    },
    image: '../assets/earth.png',
    description: `
        All you need is a bit of earth for your spell but how do you get it?
    `,
    choices: [{
        id: 'dig',
        description: 'Dig deep into the earth to get the best soil.',
        result: `
            This is tough work but you gain points for getting the best earth.
        `,
        peace: 0,
        power: 50
    }, {
        id: 'scrape',
        description: 'Scrape a bit of soil off the top',
        result: `
            You lazily scrape a bit of soil off the top because who's got time for manual labor?
        `,
        peace: -30,
        power: 40
    }, {
        id: 'leave',
        description: 'You leave without soil.',
        result: `
            You leave the beautiful forest without soil because you don't want to disturb the trees.
        `,
        peace: -5,
        power: 0
    }]
};

const fire = {
    id: 'fire',
    title: 'An open grassy Meadow',
    map: {
        top: '89%', // for where it shows on page
        left: '44%'
    },
    image: '../assets/fire.png',
    description: `
        You need to gather a bit of burnt nature to make your spell ever more powerful. What do you 
        do?
    `,
    choices: [{
        id: 'burn',
        description: 'Light a fire.',
        result: `
        Oops! You light a fire in the middle of the meadow burning it to the ground.
        `,
        peace: -50,
        power: 0
    }, {
        id: 'steal',
        description: 'Steal the fire from a near by home.',
        result: `
            You break into a near by home and steal whatever was burning in their fireplace.
        `,
        peace: -30,
        power: 50
    }, {
        id: 'candle',
        description: 'You light a candle',
        result: `
            You light a candle in the meadow, burn a slip of paper and blow the candle out.
        `,
        peace: 50,
        power: 0
    }]
};

const air = {
    id: 'air',
    title: 'The highest Hilltop',
    map: {
        top: '89%', // for where it shows on page
        left: '44%'
    },
    prerequisites: ['water', 'earth', 'fire'],
    image: '../assets/air.png',
    description: `
        You need the element of air to blow out the old and bring in the new. How do you get it?
    `,
    choices: [{
        id: 'mediate',
        description: 'Plop down and close your eyes to breathe and think.',
        result: `
            You do get a lot of energy from mediation but you don't get any more power from mediation.
        `,
        peace: 20,
        power: 0
    }, {
        id: 'chant',
        description: 'You chant.',
        result: `
            You get the air around you moving by chanting your favorite tune.
        `,
        peace: 30,
        power: 50
    }, {
        id: 'yoga',
        description: 'Stretch it out.',
        result: `
            You decide to get physical in order to get air in your lungs, but you don't get any more
            power.
        `,
        peace: -10,
        power: 0
    }]
};

export const ingredientsData = [
    water,
    earth,
    fire,
    air,
];

