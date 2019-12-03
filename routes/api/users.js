const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');

//@route        POST api/users
//description   Register User  
//access        Public
router.post('/', 
[
  check('name', 'El nombre es requerido')
  .not()
  .isEmpty(),
  check('email', 'Por favor, ingresa un correo valido').isLength({min: 8}),
  check('password', 'Por favor, ingresa una contraseña con 6 o más caracteres').isLength({min: 6})
],
 async (req, res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
   }

   const { name, email, password } = req.body;

   try {
      //See if user exists
      let user = await User.findOne({ email: email });

      if(user){
        return res
        .status(400)
        .json({ errors: [{ msg: 'El usuario ya existe' }] }); 
      }

      //Get users Gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      })

      user = new User({
        name,
        email,
        avatar,
        password
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10); 

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // //Return jsonwebtoken
      // res.send('Usuario registrado');
      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload, 
        config.get('jwtSecret'),
        {expiresIn: 360000},
        (err, token ) => {
          if(err) throw err;
          res.json({token});
        });

   } catch (err) {
     console.error(err.message);
     res.status(500).send('Server error'); 
   }
});

module.exports = router;