const Story = require('../models/Story');

exports.createStory = async (req, res) => {
  try {
    const newStory = new Story(req.body);
    const story = await newStory.save();
    res.status(201).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
