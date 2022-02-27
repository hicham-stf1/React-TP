const express = require('express');
const router = express.Router();


//Item Model
const Item  = require('../../model/Item');

router.get('/',(req,res) => {
    
    Item.find()
    .sort({date : -1})
    .then(items => res.json(items));
})

// @route    POST /api/items
// @desc     Add an item
// @route    Public
router.post("/", async (req, res) => {
   
    const newItem = new Item({
        name : req.body.name
    })

    newItem.save().then(item => res.json(item))
  });

// @route    POST /api/items
// @desc     Add an item
// @route    Public
router.delete("/:id", async (req, res) => {
   
    Item.findById(req.params.id).then(item => item.remove().then(
        () => res.json({success : true})

    )).catch(err => res.status(404).json({success:false}))
  
  });

module.exports = router;