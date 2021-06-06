const express = require("express");
const app = express()
const fetch = require("node-fetch");
const dotenv = require("dotenv").config();

app.use(express.static("public"))

app.get("/data", async(req, res) => {
    const query = `{ viewer { login } }`
    const url = "https://api.github.com/graphql"

    const options = {
        method: "post",
        headers: {
            "content-type": "application/json",
             authorization
        }
    }
    
})

app.listen(3000, () => {
    console.log("I workd")
})


