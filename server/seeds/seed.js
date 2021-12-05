const db = require('../config/connection');
const { Category, Comment, Step, Tag, Tutorial } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
    const categories = await Category.insertMany([
        {
            name: "Web Technologies"
        },
        {
            name: "Software Engineering"
        },
        {
            name: "Algorithms"
        },
        {
            name: "Soft Skills"
        },
        {
            name: "Project Tours"
        }
    ]);
    console.log("Categories seeded.");

    await Tag.deleteMany();
    const tags = await Tag.insertMany([
        {
            name: "Node"
        },
        {
            name: "React"
        },
        {
            name: "Figma"
        },
        {
            name: "npm"
        },
        {
            name: "Markdown"
        },
        {
            name: "Regular Expressions"
        },
        {
            name: "Teachback"
        },
        {
            name: "communication"
        }
    ]);
    console.log("Tags seeded.");

    await Comment.deleteMany();
    const comments = await Comment.insertMany([
        // TODO
    ]);

    await Step.deleteMany();
    const steps = await Tutorial.insertMany([
        {
            content: `# Logging into Teachback
            First, you'll need either an email, a github account, or a Google account. Make sure you have access to one of these three accounts.`
        },
        {
            content: `# Logging in with an Email
            * If logging in with an email, click the **Log In** button in the top right of the screen, then fill out your username and password and click **log in** to log in. 
            * If you haven't yet created an account, click the **Register** tab on the window that pops up, then fill out the information and click **submit**.
            In either case, after a moment, you should be logged into Teachback.`
        },
        {
            content: `# Logging in with Google
            If logging in with google, click the **Log In** button in the top right of the screen, then press the button with the Google icon to sign in with your google account.
            A window should pop up that may ask you for permission for Teachback to use your information.
            Note that if you haven't yet created a Teachback account, you can still choose to log in with google and an account will be made for you automatically.`
        },
        {
            content: `# Logging in with GitHub
            If logging in with GitHub, click the ** Log In** button in the top right of the screen. In the resulting dialog, press the button with the GitHub logo. 
            A window should pop up from github asking for permission for Teachback to use your information. Once agreed, you should now be logged in.`
        },
        {
            content: `# What now?
            Now that you're logged in, you should be able to create a tutorial by clicking the **Create Tutorial** button in the top right hand of the screen, create tutorial rooms by pressing the **create room** button on the tutorial cards, or visit your friends rooms by following the link they send to you.
            `
        }

    ]);
    console.log("Steps seeded.");

    await Tutorial.deleteMany();
    const tutorials = await Tutorial.insertMany([
        // TODO
    ]);
    console.log("Tutorials seeded.");

    
    console.log("Comments seeded.");

    process.exit();
});