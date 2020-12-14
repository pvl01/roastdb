const FIND_ALL_ORDERS =
    "https://roastdb.herokuapp.com/findAllOrders"
const FIND_ORDER =
    "https://roastdb.herokuapp.com/findOrder"
const CREATE_ORDER =
    "https://roastdb.herokuapp.com/createOrder"
const DELETE_ORDER =
    "https://roastdb.herokuapp.com/deleteOrder"
const UPDATE_ORDER_TOTAL_COST=
    "https://roastdb.herokuapp.com/updateOrderTotalCost"

const findAllOrders = () =>
    fetch(`${FIND_ALL_ORDERS}`)
    .then(response => response.json())

const findOrder = (order) =>
    fetch(`${FIND_ORDER}/${order}`)
    .then(response => response.json())

const createOrder = () =>
    fetch(`${CREATE_ORDER}`)
    .then(response => response.json())

const deleteOrder = (order) =>
    fetch(`${DELETE_ORDER}/${order}`)

const updateOrderTotalCost = (order, totalCost) =>
    fetch(`${UPDATE_ORDER_TOTAL_COST}/${order}/${totalCost}`)
    .then(response => response.json())
