var express = require("express");
var router = express.Router();

const {
  listRecords,
  findByLocationAndSize,
  findByVendorAndLocation,
} = require("../controllers");

router.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Welcome to the best API",
  });
});
router.get("/getRecords/:date", listRecords);
router.get(
  "/getPriceByLocationAndSize/:date/:location/:size/:sType/price",
  findByLocationAndSize
);
router.get(
  "/getPriceByVendorAndLocation/:date/:vendor/:location/:sType/price",
  findByVendorAndLocation
);

module.exports = router;
