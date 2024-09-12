import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { config } from 'dotenv'

config();

const dbUrl = process.env.DATABASE_URL
if(!dbUrl) {
    throw new Error('Database URL not found')
}
mongoose.connect(dbUrl).then(() => {
    console.log('Connected to database')
})

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))