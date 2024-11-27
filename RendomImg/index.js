const express = require('express')
    const app = express()
    const port = 3000
    const axios = require('axios')
    const cheerio = require('cheerio')
    app.get('/', async (req, res) => {
        try {
            const { data } = await axios.get('https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/')
            const $ = cheerio.load(data)
        
        }
        catch (err) {
            console.error(err)
            res.status(500).send('Error fetching the webpage')
        }
    });