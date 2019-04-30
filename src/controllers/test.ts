import { Request, Response } from 'express'

export let time = (request: Request, response: Response) => {
    response.send(new Date())
}

export let envInfo = (request: Request, response: Response) => {
    response.send(process.env)
}