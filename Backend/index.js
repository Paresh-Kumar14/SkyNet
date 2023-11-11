const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173", "https://skynet-chat.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        headers: ["Authorization", "Content-Type"],
    })
);

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const p = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username }, { headers: { "private-key": 'e256dc65-8062-4da3-8118-79075ea2ecee' } }
        )
        return res.status(p.status).json(p.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }


});

app.listen(3484);