const express = require('express')
const axios = require('axios')
const app = express()

const URLBase = 'https://api.github.com/search/repositories?q='

app.get('/', async (_, res) => {
    res.status(200).send('Welcome to API.')
})

app.get('/search', async (req, res) => {
    if (req.query.lang) {
        const { lang, sort, page } = req.query
        let URL = URLBase + `language:${lang}`

        try {
            if (sort) { URL + `&sort=${sort}` }
            if (page) { URL + `&page=${page}` }
            const resultData = await axios.get(URL)
            return res.json(resultData.data)
        } catch (error) {
            return res.status(404).send('Use one of options available on Github search')
        }

    }

    res.status(404).send('Use one of languages available on Github search')
})

module.exports = app