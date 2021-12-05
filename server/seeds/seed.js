const db = require('../config/connection');
const { Category, Comment, Step, Tag, Tutorial, User } = require('../models');

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

    await User.deleteMany();
    const users = await User.insertMany([
        {
            username: "TeachbackBot",
            token: "I_HAVE_NO_TOKEN_BUT_I_MUST_AUTH",
            email: "teachback@teachback.us",
            image: "I_HAVE_NO_URL_BUT_I_MUST_RENDER"
        },
        {
            username: "NotARealUser",
            token: "NO_THANKS_I_DONT_SMOKE",
            email: "notreal@teachback.us",
            image: "IN_ALL_THE_PEOPLE"
        }
    ]);
    console.log("Users seeded.");

    const comments = await Comment.insertMany([
        {
            author: users[1]._id,
            content: "Will a gmail account be ok?"
        },
        {
            author: users[0]._id,
            content: "Google makes a google account for you automatically with your gmail account, so you won't need to make any additional accounts."
        },
        {
            author: users[1]._id,
            content: "I forgot my password, how can I change it?"
        },
        {
            author: users[0]._id,
            content: "Hmm, I'm not sure yet, but I'll get back to you as soon as I can!"
        }
    ]);
    console.log("Comments seeded.")

    await Step.deleteMany();
    const steps = await Tutorial.insertMany([
        {
            content: `# Logging into Teachback
            First, you'll need either an email, a github account, or a Google account. Make sure you have access to one of these three accounts.`,
            comments: [
                comments[0]._id, comments[1]._id
            ]
        },
        {
            content: `# Logging in with an Email
            * If logging in with an email, click the **Log In** button in the top right of the screen, then fill out your username and password and click **log in** to log in. 
            * If you haven't yet created an account, click the **Register** tab on the window that pops up, then fill out the information and click **submit**.
            In either case, after a moment, you should be logged into Teachback.`,
            comments: [
                comments[2]._id, comments[3]._id
            ]
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
        {
            author: users[0]._id,
            tags: [ tags[6]._id ],
            category: categories[4]._id,
            // Creates a new array of all the step id's in order.
            steps: steps.map(step => step._id),
            ratings: [],
            searchable: true,
            title: "How to use Teachback"
        }
    ]);
    console.log("Tutorials seeded.");

    
    
    console.log("Comments seeded.");

    process.exit();
});