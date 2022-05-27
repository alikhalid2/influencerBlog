const router = require("express").Router();
const Plan = require("../../model/Plan");

// get the plan
router.get("/:id", async (req, res) => {
  const planID = req.params.id;
  try {
    const plan = await Plan.findById(planID);
    res.status(200).json(plan);
  } catch (error) {
    res.status(400).json(error);
  }
});

// reset the plan
router.put("/reset/:id", async (req, res) => {
  const planID = req.params.id;
  try {
    const plan = await Plan.findById(planID);
    if (plan.name === "premium") {
      if (plan.postNumber <= 0) {
        const now = new Date();
        const planTimestamp = new Date(plan.createdAt).getTime();
        const nowTimestamp = now.getTime();
        const microSecondsDiff = Math.abs(nowTimestamp - planTimestamp);
        const daysDiff = Math.round(microSecondsDiff / (1000 * 60 * 60 * 24));
        if (daysDiff >= 30) {
          plan.postNumber = 2;
          plan.createdAt = nowTimestamp;
          const updatedPlan = await Plan.findByIdAndUpdate(
            planID,
            {
              $set: plan,
            },
            { new: true }
          );
          res.status(200).json(updatedPlan);
        }
      }
    }
    res.status(200).json(null);
  } catch (error) {
    res.status(400).json(error);
  }
});

// decrease the post number
router.put("/decrease/:id", async (req, res) => {
  const planID = req.params.id;
  try {
    const planFinded = await Plan.findById(planID);
    const postNumber = planFinded._doc.postNumber - 1;
    const updatedPlan = await Plan.findByIdAndUpdate(
      planID,
      {
        $set: { postNumber },
      },
      { new: true }
    );
    res.status(200).json(updatedPlan);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
module.exports = router;
