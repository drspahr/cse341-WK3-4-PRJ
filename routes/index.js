const router = require('express').Router();

router.get('/', (req, res) => {
    //#swagger.tags=['Rectifer Information and Inspection']
    res.send('Rectifier Information and Inspection');
})

router.use('/', require('./swagger'));
router.use('/rectifiers', require('./rectifiers'));

module.exports = router;