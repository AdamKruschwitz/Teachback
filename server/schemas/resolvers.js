const resolvers = {
    Query: {me: () => {
        return 'hello world';
    }},
    
}

module.exports = resolvers