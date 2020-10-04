const express = require('express')
const axios = require('axios')
const app = express()

const PORT = process.env.PORT || 3001
const URLBase = 'https://api.github.com/search/repositories?q='

app.get('/', async (_, res) => {
    res.send('Welcome to API.')
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

    res.send('Use one of languages available on Github search')
})

app.listen(PORT, () => console.log(`Server Started on ${PORT}`))