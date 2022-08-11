const { getUserList } = require("../controller/user");
const { Router } = require("express");
const router = Router();
router.get("/getUser", getUserList);
module.exports = router;
