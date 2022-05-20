const express = require('express');
require('./db/config');
const User = require('./db/User')

const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is working')
});

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne(req.body);

        if(user) res.send(user);
        else return res.status(400).json({message : 'User Login Failed'});

    } catch (error) {
        return res.status(400).json({message : 'Something went wrong'});
    }
    
});

app.listen(5000);