const express = require('express')
const router = express.Router()
const userCon = require("../controllers/userCon")
const listCon = require("../controllers/listCon")
const itemCon = require("../controllers/itemCon")

router.get("/users", userCon.index)
router.get("/users/:id", userCon.show)
router.post("/users", userCon.create)
router.put("/users/:id", userCon.update)
router.delete("/users/:id", userCon.delete)

router.get("/lists", listCon.index)
router.get("/lists/:id", listCon.show)
router.post("/lists", listCon.create)
router.put("/lists/:id", listCon.update)
router.delete("/lists/:id", listCon.delete)

// router.get("/users", itemCon.index)
// router.get("/users/:id", itemCon.show)
// router.post("/users", itemCon.create)
// router.put("/users/:id", itemCon.update)
// router.delete("/users/:id", itemCon.delete)



module.exports = router