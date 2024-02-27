import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

//Importing routes
import IndexRoutes from './routes' // from routes import the index file
import BooksRoutes from './routes/books' // from routes import the index file

//Initializations
const app = express();
import './database'

//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views')) // only to said that the folder views is into the folder src
app.engine('.hbs', engine({ //to said how we will use handlebar into the views (how handlebar will work)
    extname: '.hbs', //to understand all files with extension .hbs
    layoutsDir: path.join(app.get('views'), 'layouts'), //from the views concat with layouts
    partialsDir: path.join(app.get('views'), 'partials'), //from the views concat with partials
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}))
app.set('view engine', '.hbs'); //use handlebar configured

//Middlewares
app.use(express.json()) //to interpreting the json files
app.use(express.urlencoded({extended: false})) //if a form html send data, interpret that data

//Routes
app.use('/', IndexRoutes)
app.use('/books', BooksRoutes) // 'use' to export an object -- all routes from ./routes/books.ts precede from this route

//Static files
app.use(express.static(path.join(__dirname, 'public'))) // the public folder is in that path

// Starting Server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});
