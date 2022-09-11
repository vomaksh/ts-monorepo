import { greet } from '@ts-monorepo/core';
import express from 'express';
const app = express()

const PORT = 4000

app.get('/', (req, res) => {
    res.send(greet('Katsura'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
