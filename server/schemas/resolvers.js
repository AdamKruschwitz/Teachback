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
            return Tag.findOne({ _id: tagId })
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
        createTutorial: async (_, { author, title, tagIDs, categoryIDs, stepId }) => {
            const createTutorial = await User.createTutorial({ _id, });
            return Tutorial.create({author, title, tagIDs, categoryIDs, stepId});
        },
        addComment: async (_, { stepId, content }) => {
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
            if (context.user) {
                return Rating.findOne({ _id });
            }
        },
        deleteRating: async (_, { ratingId }, context) => {
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