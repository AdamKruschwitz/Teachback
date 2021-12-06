const { UserInputError, AuthenticationError } = require("apollo-server-errors")
const { User, Category, Tutorial, Room, Tag, Step, Rating } = require("../models")

const resolvers = {
    Query: {
        user: async (_, { username }) => {
            return User.findOne({ username: username }).populate('tutorials')
        },
        categories: async () => {
            return Category.findAll();
        },
        tutorials: async (_, { title, tagIDs, categoryIDs }) => {
            const args = title ? { title } : {};
            return Tutorial.find(args)
        },
        tutorial: async (_, { id }) => {
            return Tutorial.findOne({ _id: tagId })
        },
        room: async (_, { id }) => {
            // TODO - fix this. this does not return a room.
            return Tag.findOne({ _id: id })
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
    },
}

module.exports = resolvers;