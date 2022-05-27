const router = require("express").Router();
const User = require("../../model/User");
const Plan = require("../../model/Plan");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const planName = req.body.plan;
    const isPremium = planName === "premium";
    const newPlan = new Plan({
      planName: planName,
      postAllow: isPremium ? true : false,
      postNumber: isPremium ? 2 : 0,
    });
    const planFinded = await newPlan.save();
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      planID: planFinded._doc._id,
      profilePic: "image-1.jpeg",
    });

    const user = await newUser.save();
    const { createdAt, updatedAt, _id, ...plan } = planFinded._doc;

    res.status(200).json({ ...user, ...plan });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json("Wrong credentials!");
      return;
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json("Wrong credentials!");
      return;
    }
    const planFinded = await Plan.findById(user.planID);
    const { createdAt, updatedAt, _id, ...plan } = planFinded._doc;
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, ...plan });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
