const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.get("/", function(req, res) {
    res.send("App is running now.")
}) 

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})
