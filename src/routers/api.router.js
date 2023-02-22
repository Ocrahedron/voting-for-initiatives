const router = require('express').Router();
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('save this to the database', hashedPassword);

  req.session.user = { name, email, id: Math.floor(Math.random() * 2500) };

  res.json({ name, email });
});

router.post('/register',async (req, res) => {
  try {
    const {
     name, email,password
    } = req.body;
    if (email && password && name) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const newUser = await User.create({
        name,
        password: hashPassword,
        email,
       
      });
      res.redirect(307, '/home');
    } else throw new Error('All fields are required');
  } catch (error) {
    if (error.errors) { res.status(400).json({ message: error.errors[0].message }); } else res.status(400).json({ message: error.message });
  }
});

module.exports = router;

