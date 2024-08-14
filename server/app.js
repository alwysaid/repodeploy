if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

// const express = require ('express')
// const app = express()
// const PORT = process.env.PORT || 3000

// app.get('/hello', (req, res) => {
//     res.status(200).json({message: "HELLO WORLD GUYS"})
// })

// app.listen(PORT, () => {
//     console.log('Server Running');
// })

const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.status(200).json({message: "HELLO WORLD GUYS"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

