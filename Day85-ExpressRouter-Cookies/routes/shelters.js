const express = require('express');
const router = express.Router();

router.get('/shelters', (req, res) => {
    res.send('All shelters')
})

router.post('/shelters', (req, res) => {
    res.send('Creating shelter')
})

router.get('/shelters/:id', (req, res) => {
    res.send('View one shelter')
})

router.get('/shelters/:id/edit', (req, res) => {
    res.send('Editing one shelter')
})

module.exports = router;