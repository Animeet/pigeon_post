const router = require("express").Router();
const { User } = require("../models/User");

// Post request route that retrieves the form data(email, password) and creates a new user in the database, using our User model
router.post("/register", async (req, res) => {
  try {
    await User.create(req.body);

    res.redirect('/');
  } catch (error) {
    res.redirect('/register');
  }
});

module.exports = router;
