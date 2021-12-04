const { UserInputError, AuthenticationError } = require("apollo-server-errors")
const resolvers = {
    Category,
    Tutorial,
    Rating,
    Comment,
    User,
    Tag,
    Step,
    Room,
} require ("../models")
const resolvers = {
    Query: {
        currentUser: async () => {
            return null;
        },
        user: async(_, { username }) => {
        return User.findOne({ username: username }).populate('tutorials')
    },
    category: async (_, { username }) => {
        return Category.findOne({ categoryId });
    },
    tutorialSearch: async (_, { title }) => {
        const args = title ? { title } : {};
        return Tutorial.find(args)
    },
    tutorial: async (_, { id}) => {
        return Tutorial.findOne({ _id: tagId })
    },
    room: async (_, { id }) => {
        return Tag.findOne({ _id: tagId })
    },
    Mutation: {
        addUser: async  (_, {args }) => {
            try{
                let res = await User.create({ args });
                return res;
            }
        }
    }
    },



}
}

    
}

module.exports = resolvers