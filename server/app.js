const express = require('express')
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mb 
mongoose.connect("mongodb+srv://Soulyana:htvCSpFbYMW56Kq@cluster0-wjnzn.mongodb.net/test?retryWrites=true&w=majority")
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000');
});