const router = require("express").Router()
const axios = require('axios')
const sessiondId = "d1h5cw7bd5zcnv7j4upqrsoz8nzyybfq"
router.get('/:id', async (req, res) => {
    id = req.params.id
    await axios.get(`https://jacobs.university/api/v1/users/${id}/`, {
        withCredentials: true,
        headers: {
            "cookie": `sessionid=${sessiondId}`
        }
    }).then(response => {
        console.log(response);
        res.status(200).json(response.data)
    }).catch(error => {
        res.status(404).json("Not Found " + error)
    })
})

router.get("/:id/image", async (req, res) => {
    id = req.params.id
    await axios.get(`https://jacobs.university/api/v1/users/${id}/image`, {

        headers: {
            "cookie": `sessionid=${sessiondId}`,
        }
    }).then(response => {
        res.status(200).send(response.data)
        console.log(response);
    }).catch(error => {
        console.log("error is" + error)
    })
})

module.exports = router