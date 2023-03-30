const express = require("express");
const { getKitchen } = require("../controllers/kitchenController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route('/').get(protect,getKitchen);
/*router.route('/create').post()
router.route('/:id')
    .get()
    .put()
    .delete();*/
module.exports = router;