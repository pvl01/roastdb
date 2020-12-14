const FIND_ALL_COFFEES =
    "https://roastdb.herokuapp.com/findAllCoffees"
const FIND_COFFEE =
    "https://roastdb.herokuapp.com/findCoffee"
const CREATE_COFFEE =
    "https://roastdb.herokuapp.com/createCoffee"
const DELETE_COFFEE =
    "https://roastdb.herokuapp.com/deleteCoffee"
const UPDATE_COFFEE_ROAST =
    "https://roastdb.herokuapp.com/updateCoffeeRoast"

const findAllCoffees = () =>
    fetch(`${FIND_ALL_COFFEES}`)
    .then(response => response.json())

const findCoffee = (coffee) =>
    fetch(`${FIND_COFFEE}/${coffee}`)
    .then(response => response.json())

const createCoffee = () =>
    fetch(`${CREATE_COFFEE}`)
    .then(response => response.json())

const deleteCoffee = (coffee) =>
    fetch(`${DELETE_COFFEE}/${coffee}`)

const updateCoffeeRoast = (coffee, roast) =>
    fetch(`${UPDATE_COFFEE_ROAST}/${coffee}/${roast}`)
    .then(response => response.json())
