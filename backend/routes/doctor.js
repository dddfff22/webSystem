const { Router } = require('Express')
const doctorModel = require('../db/models/doctor')
const patientModel = require('../db/models/patient')

const router = Router()
router.post('/register', (req, res) => {
    res.send('Hello World!\n');
});
router.get('/call/:doctorName', (req, res) => {
    res.send('Hello World!\n');
});
router.get('/done/:patientId', (req, res) => {
    res.send('Hello World!\n');
});
router.get('/list', (req, res) => {
    res.send('Hello World!\n');
});


module.exports = router