const express = require('express');
const router = express.Router();
// import posts.js(create,index,show,update,destroy)
const { create, index, show, update, destroy } = require('../../handlers/v1/posts');

// router url main get
router.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'welcome to api v1'
    });
});

// router url post (create data)
router.post('/posts', create);
// router url get (index data)
router.get('/posts', index);
// router url show (show id data - detail)
router.get('/posts/:postId', show);
// router url put (update data)
router.put('/posts/:postId', update);
// router url delete (delete data)
router.delete('/posts/:postId', destroy);

module.exports = router;