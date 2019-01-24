const express = require('express')
const router = express.Router()
const userCon = require("../controllers/userCon")
const listCon = require("../controllers/listCon")
const itemCon = require("../controllers/itemCon")

router.get("/users", userCon.index)
// router.get("/users/:id", userCon.show)
// router.post("/users", userCon.create)
// router.put("/users/:id", userCon.update)
// router.delete("/users/:id", userCon.delete)

// router.get("/users", listCon.index)
// router.get("/users/:id", listCon.show)
// router.post("/users", listCon.create)
// router.put("/users/:id", listCon.update)
// router.delete("/users/:id", listCon.delete)

// router.get("/users", itemCon.index)
// router.get("/users/:id", itemCon.show)
// router.post("/users", itemCon.create)
// router.put("/users/:id", itemCon.update)
// router.delete("/users/:id", itemCon.delete)



module.exports = router