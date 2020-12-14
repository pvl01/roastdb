const FIND_ALL_CUSTOMERS = "https://roastdb.herokuapp.com/findAllCustomers"
const FIND_CUSTOMER = "https://roastdb.herokuapp.com/findCustomer"
const CREATE_CUSTOMER = "https://roastdb.herokuapp.com/createCustomer"
const DELETE_CUSTOMER = "https://roastdb.herokuapp.com/deleteCustomer"
const RENAME_CUSTOMER = "https://roastdb.herokuapp.com/renameCustomer"
const RENAME_CUSTOMER_LAST = "https://roastdb.herokuapp.com/renameCustomerLast"
const UPDATE_CUSTOMER_USERNAME =
    "https://roastdb.herokuapp.com/updateCustomerUsername"
const UPDATE_CUSTOMER_PASSWORD =
    "https://roastdb.herokuapp.com/updateCustomerPassword"
const UPDATE_CUSTOMER_EMAIL =
    "https://roastdb.herokuapp.com/updateCustomerEmail"

const findAllCustomers = () =>
    fetch(`${FIND_ALL_CUSTOMERS}`)
    .then(response => response.json())

const findCustomer = (customer) =>
    fetch(`${FIND_CUSTOMER}/${customer}`)
    .then(response => response.json())

const createCustomer = () =>
    fetch(`${CREATE_CUSTOMER}`)
    .then(response => response.json())

const deleteCustomer = (customer) =>
    fetch(`${DELETE_CUSTOMER}/${customer}`)

const renameCustomer = (customer, name) =>
    fetch(`${RENAME_CUSTOMER}/${customer}/${name}`)
    .then(response => response.json())

const renameCustomerLast = (customer, name) =>
    fetch(`${RENAME_CUSTOMER_LAST}/${customer}/${name}`)
    .then(response => response.json())

const updateCustomerUsername = (customer, username) =>
    fetch(`${UPDATE_CUSTOMER_USERNAME}/${customer}/${username}`)
    .then(response => response.json())

const updateCustomerPassword = (customer, password) =>
    fetch(`${UPDATE_CUSTOMER_PASSWORD}/${customer}/${password}`)
    .then(response => response.json())

const updateCustomerEmail = (customer, email) =>
    fetch(`${UPDATE_CUSTOMER_EMAIL}/${customer}/${email}`)
    .then(response => response.json())
