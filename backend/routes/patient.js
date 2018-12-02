const { Router } = require('Express')
const router = Router()
const patientModel = require('../db/models/patient')

router.post('/register', (req, res) => {
    res.send('Hello World!\n');
});

router.get('/list', (req, res) => {
    res.send('Hello World!\n');
});

module.exports = router