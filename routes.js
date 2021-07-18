const router = require("express").Router()
const axios = require('axios')

router.get('/:id', async (req, res) => {
    id = req.params.id
    await axios.get(`https://jacobs.university/api/v1/users/${id}/`, {
        withCredentials: true,
        headers: {
            "cookie": "sessionid=14bigve5tmqtwukzf4mbwomoucvtq0u1"
        }
    }).then(response => {
        console.log(response);
        res.status(200).json(response.data)
    }).catch(error => {
        res.status(404).json("Not Found " + error)
    })
})

module.exports = router