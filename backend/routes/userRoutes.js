const express = require('express');
const router = express.Router();
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');

router.post('/signup', createUser);
router.get('/profile/:id', getUser);
router.put('/profile/:id', updateUser);
router.delete('/profile/:id', deleteUser);

module.exports = router;
