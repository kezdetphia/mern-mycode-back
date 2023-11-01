const express = require('express')

const {
  getAllCodes,getOneCode,createCode,deleteCode,updateCode
} = require('../controllers/codeController')


const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// middleware routes protection

router.use(requireAuth)

// GET all code
router.get('/', getAllCodes)

// GET a single code
router.get('/:id', getOneCode)

// POST a new code
router.post('/', createCode)

//DELETE a code
router.delete('/:id', deleteCode)

//UPDATE a code
router.patch('/:id', updateCode)


module.exports = router