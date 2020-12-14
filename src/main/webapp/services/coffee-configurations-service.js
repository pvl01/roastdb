const FIND_ALL_COFFEE_CONFIGURATIONS =
    "https://roastdb.herokuapp.com/findAllCoffeeConfigurations"
const FIND_COFFEE_CONFIGURATION =
    "https://roastdb.herokuapp.com/findCoffeeConfiguration"
const CREATE_COFFEE_CONFIGURATION =
    "https://roastdb.herokuapp.com/createCoffeeConfiguration"
const DELETE_COFFEE_CONFIGURATION =
    "https://roastdb.herokuapp.com/deleteCoffeeConfiguration"
const UPDATE_COFFEE_CONFIGURATION_COST =
    "https://roastdb.herokuapp.com/updateCoffeeConfigurationCost"

const findAllCoffeeConfigurations = () =>
    fetch(`${FIND_ALL_COFFEE_CONFIGURATIONS}`)
    .then(response => response.json())

const findCoffeeConfiguration = (coffeeConfiguration) =>
    fetch(`${FIND_COFFEE_CONFIGURATION}/${coffeeConfiguration}`)
    .then(response => response.json())

const createCoffeeConfiguration = () =>
    fetch(`${CREATE_COFFEE_CONFIGURATION}`)
    .then(response => response.json())

const deleteCoffeeConfiguration = (coffeeConfiguration) =>
    fetch(`${DELETE_COFFEE_CONFIGURATION}/${coffeeConfiguration}`)

const updateCoffeeConfigurationCost = (coffeeConfiguration, cost) =>
    fetch(`${UPDATE_COFFEE_CONFIGURATION_COST}/${coffeeConfiguration}/${cost}`)
    .then(response => response.json())
