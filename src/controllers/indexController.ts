import { Request, Response } from "express"
class IndexController{
    
    public index (req: Request, res: Response){ //this function returns an object
        res.render('index', {title: 'Welcome to Book App'})
    }
}

export const indexController = new IndexController(); //export the result of the function
