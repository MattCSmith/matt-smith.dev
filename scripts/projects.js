const projects = [
    {
        name: 'Fullstack Trends',
        image: './images/project/fst.png',
        desc: 'Fullstack Trends is a website that visualizes the most current job demand and popular developer skills. Ensuring your learning schedule is both efficient and effective!',
        feat: ['nodejs-plain', 'react-plain', 'css3-plain']
    },
    {
        name: 'zeroBot',
        image: './images/project/zerobot.png',
        desc: 'A Discord bot for Zero to Mastery, features are mainly to introduce new users to the Discord interface. Some other features includes posting code to Hastebin, submitting bugs, pinging the bot and purging chat history.',
        feat: ['nodejs-plain', 'javascript-plain', 'ubuntu-plain', 'nginx-original']
    },
    {
        name: 'Advent of Code',
        image: './images/project/aoc.png',
        desc: 'The brief of this project was to build an extention to zeroBot for user to submit thier solutions to AoC. Displaying all of the solutions on a webpage',
        feat: ['html5-plain', 'css3-plain', 'javascript-plain', 'bootstrap-plain', 'mongodb-plain']
    },
    {
        name: 'Rusty Resources',
        image: './images/project/rustyresources.png',
        desc: 'The aim of this project is to create a web app that will display all of the student submitted resources, from the #dev-resources channel and potentially other channels on the ZTM Discord server. A Discord bot will be responsible for automatically adding new resources to a database. Features include: resource upvoting, editing, bookmarking, filtering and sorting.',
        feat: ['nodejs-plain', 'react-original', 'bootstrap-plain', 'mongodb-plain', 'express-original', 'heroku-original']
    },
    {
        name: 'RoboMatch',
        image: './images/project/robomatch.png',
        desc: 'A coding challenge entry for Zero to Mastery\'s coding challenge 14. A Pairs game, written entirely in Vanilla Javascript, HTML and CSS. Features include: timer, 4 modes of difficulty and a firebase leaderboard',
        feat: ['nodejs-plain', 'javascript-plain', 'html5-plain', 'css3-plain', 'heroku-original']
    },
    {
        name: 'Creating Tim',
        image: './images/project/creatingtim.png',
        desc: 'A solution to Zero To Mastery\'s coding challenge 3. The concept of the challenge was to create a website using the provided theme from Creative Tim and intergrate IBM\'s Watson Speech recognition API.',
        feat: ['nodejs-plain', 'react-plain', 'bootstrap-plain', 'heroku-original']
    },
    
]

projects.forEach(p => {
    const url = p.name.replace(/\s/g, '').toLowerCase()

    const container = document.getElementById('projectContainer')

    const card = document.createElement('div');
    card.setAttribute('class', 'card text-center')
    
    const img = document.createElement('img');
    img.setAttribute('class', 'card-img-top mt-4')
    img.src = p.image
    card.appendChild(img)

    const body = document.createElement('div');
    body.setAttribute('class', 'card-body');
    card.appendChild(body);

    const title = document.createElement('h5')
    title.textContent = p.name;
    body.appendChild(title)

    const desc = document.createElement('p');
    desc.setAttribute('class', 'card-text')
    desc.textContent = p.desc;
    body.appendChild(desc);

    const button = document.createElement('a');
    button.setAttribute('class', 'btn btn-outline-dark');
    button.textContent = 'Find out more';
    button.href = `https://github.com/MattCSmith/matt-smith.dev/tree/master/project/${url}.md`
    body.appendChild(button)

    const footer = document.createElement('div');
    footer.setAttribute('class', 'card-footer');
    card.appendChild(footer)

    p.feat.forEach(f => {
        const fCont = document.createElement('div');
        fCont.setAttribute('class', 'tooltip11');

        const feature = document.createElement('i')
        feature.setAttribute('class', `devicon-${f} colored`);
        fCont.appendChild(feature)
        
        const tooltip = document.createElement('span');
        tooltip.setAttribute('class', 'tooltiptext');
        tooltip.textContent = f.slice(0, f.indexOf('-'))
        feature.appendChild(tooltip)

        footer.appendChild(fCont)
    });


    container.appendChild(card)
});

const skillsArray = [
    'fab fa-npm', 'fab fa-node', 'devicon-react-original-wordmark colored', 'fab fa-js', "fab fa-html5", 'fab fa-css3', 
    'devicon-babel-plain', 'devicon-bootstrap-plain-wordmark', 'devicon-express-original-wordmark',
    'devicon-git-plain-wordmark', 'devicon-heroku-plain-wordmark colored', 'devicon-linux-plain colored',
    'devicon-mongodb-plain-wordmark colored', 'devicon-nginx-original colored', 'devicon-photoshop-line', 
    'devicon-slack-plain-wordmark colored', 'devicon-travis-plain-wordmark', 'devicon-trello-plain-wordmark colored',
    'devicon-ubuntu-plain-wordmark', 'devicon-visualstudio-plain-wordmark colored', 'devicon-wordpress-plain colored',
    'fab fa-cpanel', 'fab fa-digital-ocean', 'fab fa-discord', 'fab fa-mailchimp'
]
const skills = document.getElementById('skills');
skillsArray.forEach(s => {
    const skill = document.createElement('i');
    skill.setAttribute('class', `${s} cols`);
    skills.appendChild(skill);
});