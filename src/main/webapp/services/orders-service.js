const FIND_ALL_ORDERS =
    "https://roastdb.herokuapp.com/findAllOrders"
const FIND_ORDER =
    "https://roastdb.herokuapp.com/findOrder"
const CREATE_ORDER =
    "https://roastdb.herokuapp.com/createOrder"
const DELETE_ORDER =
    "https://roastdb.herokuapp.com/deleteOrder"
const UPDATE_ORDER_CUSTOMER=
    "https://roastdb.herokuapp.com/updateOrderCustomer"
const UPDATE_ORDER_TOTAL_COST=
    "https://roastdb.herokuapp.com/updateOrderTotalCost"
const UPDATE_ORDER_PURCHASE_DATE=
    "https://roastdb.herokuapp.com/updateOrderPurchaseDate"
const UPDATE_ORDER_ARRIVAL_DATE=
    "https://roastdb.herokuapp.com/updateOrderArrivalDate"

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

const updateOrderCustomer = (order, customer) =>
    fetch(`${UPDATE_ORDER_CUSTOMER}/${order}/${customer}`)
    .then(response => response.json())

const updateOrderTotalCost = (order, totalCost) =>
    fetch(`${UPDATE_ORDER_TOTAL_COST}/${order}/${totalCost}`)
    .then(response => response.json())

const updateOrderPurchaseDate = (order, purchaseDate) =>
    fetch(`${UPDATE_ORDER_PURCHASE_DATE}/${order}/${purchaseDate}`)
    .then(response => response.json())

const updateOrderArrivalDate = (order, arrivalDate) =>
    fetch(`${UPDATE_ORDER_ARRIVAL_DATE}/${order}/${arrivalDate}`)
    .then(response => response.json())
