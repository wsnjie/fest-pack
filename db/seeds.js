const User = require("../models/User")
const List = require("../models/List")
const Item = require("../models/Item")



const tent = new Item({
    name: "4 Person Tent",
    qty: 1,
    catergory: "Shelter",
    buy: false,
    bought: false,
    packed: false
})

const lamp = new Item({
    name: "Headlamp",
    qty: 1,
    catergory: "Shelter",
    buy: false,
    bought: false,
    packed: false
})

const cooler = new Item({
    name: "Cooler",
    qty: 1,
    catergory: "Food",
    buy: false,
    bought: false,
    packed: false
})

const pillow = new Item({
    name: "Pillow",
    qty: 2,
    catergory: "Comfort",
    buy: false,
    bought: false,
    packed: false
})

const mattress = new Item({
    name: "Air Mattress",
    qty: 1,
    catergory: "Comfort",
    buy: false,
    bought: false,
    packed: false
})

const stove = new Item({
    name: "Camping Stove",
    qty: 1,
    catergory: "Food",
    buy: false,
    bought: false,
    packed: false
})

const list1 = new List({
    name: "Imagine Camping List",
    categories: ["Shelter", "Comfort", "Food"],
    items: [tent, lamp, cooler, pillow, mattress, stove]
})

const will = new User({
    name: "William",
    lists: [list1]
})

User.remove({})
    .then(() => List.remove({}))
    .then(() => Item.remove({}))
    .then(() => Item.insertMany([tent, lamp, cooler, pillow, mattress, stove]))
    .then(() => List.insertMany([list1]))
    .then(() => will.save())