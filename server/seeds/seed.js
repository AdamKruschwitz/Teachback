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
        // TODO
    ]);
    console.log("Tags seeded.");

    await Step.deleteMany();
    const steps = await Tutorial.insertMany([
        // TODO
    ]);
    console.log("Steps seeded.");

    await Tutorial.deleteMany();
    const tutorials = await Tutorial.insertMany([
        // TODO
    ]);
    console.log("Tutorials seeded.");

    await Comment.deleteMany();
    const comments = await Comment.insertMany([
        // TODO
    ]);
    console.log("Comments seeded.");

    process.exit();
});