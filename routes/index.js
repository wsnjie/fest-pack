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

router.get("/items", itemCon.index)
router.get("/items/:id", itemCon.show)
router.post("/items", itemCon.create)
router.put("/items/:id", itemCon.update)
router.delete("/items/:id", itemCon.delete)



module.exports = router