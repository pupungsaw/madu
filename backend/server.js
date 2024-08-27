const express = require('express')
const app = express()
const port = 5000;

app.use('/api/goals', require('./routes/goalsRoutes'))

app.listen(port,() => {
    console.log(`sedang berjalan di port ${port}`);
})