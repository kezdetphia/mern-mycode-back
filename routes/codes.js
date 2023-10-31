const express = require('express')



const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// GET all code
router.get('/', getAllCodes)

// GET a single code
router.get('./:id', getOneCode)

// POST a new code
router.post('/', createCode)

//DELETE a code
router.delete('/:id', deleteCode)

//UPDATE a code
router.patch('/:id', updateCode)

module.exports = router