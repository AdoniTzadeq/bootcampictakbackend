const express = require('express');

const router = express.Router();

const DATA = require('../Models/student');

// student full list add

// router.get('/studentlist', async (req, res) => {
//   console.log(req.body);
//   try {
//     const list = await DATA.find();
//     res.send(list);
//   } catch (error) {
//     console.log(error);
//   }
// });

// student add

router.post('/student', async (req, res) => {
  try {
    var item = new DATA(req.body);
    item.save();
    res.json({ status: 'Success' });
  } catch (error) {
    console.log(error);
  }
});

router.get('/viewall', async (req, res) => {
  let data = await DATA.find();
  res.json(data);
});

router.post('/search', async (req, res) => {
  let data = await DATA.find(req.body);
  res.json(data);
});

router.delete('/delete', async (req, res) => {
  let data = await DATA.deleteOne(req.body);
  res.json(data);
});

router.patch('/update', async (req, res) => {
  let data = await DATA.findOneAndUpdate({ _id: req.body._id }, req.body);
  res.json(data);
});

// student delete
router.delete('/student/:id', async (req, res) => {});

// student update
router.put('/student/:id', async (req, res) => {});

module.exports = router;

// single student detail

router.get('/student/:id', async (req, res) => {});
