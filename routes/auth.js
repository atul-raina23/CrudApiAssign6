const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

const users = {
    user1: bcrypt.hashSync('password1', 8),
    user2: bcrypt.hashSync('password2', 8)
};

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ msg: 'Please enter username and password' });
    }

    const userPassword = users[username];
    if (!userPassword || !bcrypt.compareSync(password, userPassword)) {
        return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
});

// Protected route
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ msg: `Welcome ${req.user.username}!` });
});

module.exports = router;
