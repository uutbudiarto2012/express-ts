import express, {
  type Application,
  type Response,
  type Request,
  type NextFunction
} from 'express'
import 'dotenv/config'
const app: Application = express()
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hallo Duniaaa')
})
app.listen(port, () => {
  console.log(`App run on port :  ${port}`)
})
