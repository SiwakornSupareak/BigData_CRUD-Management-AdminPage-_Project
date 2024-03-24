require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const connectDB = require('./server/config/db');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
const dbURI = "mongodb+srv://Admin:Admin@cluster0.bhmqtus.mongodb.net/Aiggin?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    })
    .catch(err => console.error(err));

// Initialize database connection
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Express session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 } // 1 week
}));

// Connect flash
app.use(flash());

// EJS setup
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Update the layout path
app.set('view engine', 'ejs');

// Routes
const customerRoutes = require('./server/routes/customer');
app.use('/', customerRoutes);

// 404 Error Handling
app.use((req, res) => {
    res.status(404).render('404');
});

module.exports = app;