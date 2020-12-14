const FIND_ALL_COFFEE_CONFIGURATIONS =
    "https://roastdb.herokuapp.com/findAllCoffeeConfigurations"
const FIND_COFFEE_CONFIGURATION =
    "https://roastdb.herokuapp.com/findCoffeeConfiguration"
const CREATE_COFFEE_CONFIGURATION =
    "https://roastdb.herokuapp.com/createCoffeeConfiguration"
const DELETE_COFFEE_CONFIGURATION =
    "https://roastdb.herokuapp.com/deleteCoffeeConfiguration"
const UPDATE_COFFEE_CONFIGURATION_ORDER =
    "https://roastdb.herokuapp.com/updateCoffeeConfigurationOrder"
const UPDATE_COFFEE_CONFIGURATION_COFFEE =
    "https://roastdb.herokuapp.com/updateCoffeeConfigurationCoffee"
const UPDATE_COFFEE_CONFIGURATION_COST =
    "https://roastdb.herokuapp.com/updateCoffeeConfigurationCost"
const UPDATE_COFFEE_CONFIGURATION_GRIND =
    "https://roastdb.herokuapp.com/updateCoffeeConfigurationGrind"
const UPDATE_COFFEE_CONFIGURATION_AMOUNT =
    "https://roastdb.herokuapp.com/updateCoffeeConfigurationAmount"

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

const updateCoffeeConfigurationOrder = (coffeeConfiguration, order) =>
    fetch(`${UPDATE_COFFEE_CONFIGURATION_ORDER}/${coffeeConfiguration}/${order}`)
    .then(response => response.json())

const updateCoffeeConfigurationCoffee = (coffeeConfiguration, coffee) =>
    fetch(`${UPDATE_COFFEE_CONFIGURATION_COFFEE}/${coffeeConfiguration}/${coffee}`)
    .then(response => response.json())

const updateCoffeeConfigurationCost = (coffeeConfiguration, cost) =>
    fetch(`${UPDATE_COFFEE_CONFIGURATION_COST}/${coffeeConfiguration}/${cost}`)
    .then(response => response.json())

const updateCoffeeConfigurationGrind = (coffeeConfiguration, grind) =>
    fetch(`${UPDATE_COFFEE_CONFIGURATION_GRIND}/${coffeeConfiguration}/${grind}`)
    .then(response => response.json())

const updateCoffeeConfigurationAmount = (coffeeConfiguration, amount) =>
    fetch(`${UPDATE_COFFEE_CONFIGURATION_AMOUNT}/${coffeeConfiguration}/${amount}`)
    .then(response => response.json())
