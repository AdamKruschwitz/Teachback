const { UserInputError, AuthenticationError } = require("apollo-server-errors")
const { User, Category, Tutorial, Room, Tag, Step, Rating } = require("../models")

const resolvers = {
    Query: {
        user: async (_, { username }) => {
            // TODO add awaits to all of these that are missing it
            return User.findOne({ username: username }).populate('tutorials')
        },
        users: async () => {
            return await User.find();
        },
        categories: async () => {
            return Category.findAll();
        },
        tutorials: async (_, { title, tagIDs, categoryIDs }) => {
            const args = title ? { title } : {};
            return Tutorial.find(args).populate(
                [{
                    path: 'steps',
                    populate: {
                        path: 'comments',
                        populate: {
                            path: 'author'
                        }
                    }
                },
                {
                    path: 'author'
                },
                {
                    path: 'tags'
                },
                {
                    path: 'ratings'
                }]
            );
        },
        tutorial: async (_, { id }) => {
            return Tutorial.findOne({ _id: tagId })
        },
        room: async (_, { _id }) => {
            // Mongoose Deep Population
            // https://mongoosejs.com/docs/populate.html#deep-populate
            const dbRoom = await Room.findById(_id)
            .populate('owner')
            .populate({
                path: 'tutorial',
                populate: [{
                    path: 'steps',
                    populate: {
                        path: 'comments',
                        populate: {
                            path: 'author'
                        }
                    }
                },
                {
                    path: 'author'
                },
                {
                    path: 'tags'
                },
                {
                    path: 'category'
                }]
            });


            // Get the current step as a step object
            const gqlCurrentStep = dbRoom.tutorial.steps[dbRoom.currentStep];

            // Return the room replacing the integer with the object.
            const out = {
                tutorial: dbRoom.tutorial,
                owner: dbRoom.owner,
                currentStep: gqlCurrentStep
            }
            return out
            
        },
    },
    Mutation: {
        addUser: async (_, { args }) => {
            try {
                let res = await User.create({ args });
                return res;
            }
            catch (e) {
                return e.message;
            }
        },
        createTutorial: async (_, { TutorialInput }) => {
            // TODO - fix this. I'm surprised this compiles.
            const createTutorial = await User.createTutorial({ _id, });
        },
        addComment: async (_, { stepId, content }) => {
            // TODO - fix this, this code does not add a comment
            if (user) {
                return Comment.findOneAndUpdate(
                    { _id: ID, author },
                    {
                        $addToSet: {
                            comments: { _id, author, content },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('Must be logged in first');
        },
        deleteComment: async (_, { commentId }, context) => {
            if (context.user) {
                // TODO: Fix this, this does not delete a comment.
                return Comment.findOneAndDelete(
                    { _id: commentId },
                    {
                        $pull: {
                            comments: {
                                _id: commentId,
                                commentAuthor: context.user.username,
                            },
                        },
                    },
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in first');
        },
        addRating: async (_, { ratingId }, context) => {
            // TODO: Fix this, this does not add a rating
            if (context.user) {
                return Rating.findOne({ _id });
            }
        },
        deleteRating: async (_, { ratingId }, context) => {
            // Fix this, this does not delete a rating
            if (context.user) {
                return Rating.findOneAndUpdate(
                    { _id: userId },
                    {
                        $pull: {
                            ratings: {
                                _id: ratingId,
                                ratingId: context.user,
                            },
                        },
                    },
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in first')
        },
        createRoom: async (_parent, { tutorialId, token }, context) => {
            // TODO: link firebase authentication with server side to check for authentication before room creation.
            const user = await User.findOne({
                token: token
            });

            const tutorial = await Tutorial.findById(tutorialId)
            .populate({
                path: 'steps',
                populate: { 
                    path: 'comments',
                    populate: { path: 'author' }
                }
            }).populate({
                path: 'author'
            });

            const dbRoom = new Room({
                owner: user._id,
                tutorial: tutorialId
            });
            dbRoom.save();

            return {
                ...dbRoom,
                _id: dbRoom._id,
                owner: user,
                tutorial: tutorial
            }
        },
        login: async (_parent, args) => {
            console.log('Login Resolver Running');
        }
    }
}

module.exports = resolvers;