const express = require('express');
const router = express.Router();
const controller = require('./usercontroller');
const path = require('path');

router.get('/user', controller.getalluser);


router.get('/user/:userid', controller.getuserbyid);

router.post('/adduser', controller.adduser);

 router.get('/', (req, res) => res.status(200).send({
      message: 'Welcome to the default API route',
    }));



    router.get('/adduser', (req, res) => res.status(200).sendFile(path.join(path.dirname(process.mainModule.filename), 'user.html')));


module.exports = router;
