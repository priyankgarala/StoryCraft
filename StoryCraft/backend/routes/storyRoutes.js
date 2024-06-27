const express = require('express');
const { createStory, getStories } = require('../controllers/storyController');

const router = express.Router();

router.post('/stories', createStory);
router.get('/stories', getStories);

module.exports = router;
