import { Request, Response } from 'express'

export let index = (request: Request, response: Response) => {
    response.render('Home')
}