import { Request, Response } from "express"
import BookModel, { Book } from '../models/Book' // BookModel allows save into the BD - Book (Interface) allows a validation of type 'Books'
class BooksController{
    
    public async index (req: Request, res: Response): Promise<void>{ //this function returns an object - here is used async await 

        const books: Book[] = await BookModel.find().lean(); // is stored into the books as an array all what we have into de db
        res.render('books/index', {
            title: 'Books',
            books
        })
    }

    public renderFormBook (req: Request, res: Response): void{ //this function returns an object
        res.render('books/add', {title: 'Add a Book'})
    }

    public async saveBook (req: Request, res: Response){ //this function returns an object - here is used async await
        const { title, author, isbn } = req.body
        const book: Book = new BookModel({ title, author, isbn }) // is generate a new object book
        await book.save();

        console.log(req.body)
        res.redirect('/books')
    }
}

export const booksController = new BooksController(); //export the result of the function
