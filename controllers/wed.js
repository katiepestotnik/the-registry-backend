const WedRegistry = require("../models/wed");
const express = require("express");
const router = express.Router();
const auth = require("../auth");

router.get("/", auth, async (req, res) => {
    try {
        const {username}= req.payload
      res.status(200).json(await WedRegistry.find({username}));
    } catch (error) {
        res.status(400).json({ error});
    }
  });
//Create
router.post("/", auth, async (req, res) => {
    try {
        const { username } = req.payload
        req.body.username = username
      res.status(200).json(await WedRegistry.create(req.body));
    } catch (error) {
        res.status(400).json({ error });
    }
  });
//update
router.put("/:id", auth, async (req, res) => {
    try {
        const { username } = req.payload;
        req.body.username = username;
        const { id } = req.params;
      res.status(200).json(await WedRegistry.findByIdAndUpdate(id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json(error);
    }
  });
//delete
router.delete("/:id", auth, async (req, res) => {
    try {
        const { username } = req.payload;
        const {id}=req.params
      res.status(200).json(await WedRegistry.findByIdAndRemove(id));
    } catch (error) {
      res.status(400).json(error);
    }
});
  
module.exports = router;