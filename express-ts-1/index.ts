import express, { Express, Response, Request, } from 'express'
const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Server 1')
})
////

app.listen(8000, () => {
    console.log('Server 1 Listening!!!')
})