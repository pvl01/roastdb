const FIND_ALL_CUSTOMERS = "https://roastdb.herokuapp.com/findAllCustomers"
const FIND_CUSTOMER = "https://roastdb.herokuapp.com/findCustomer"
const CREATE_CUSTOMER = "https://roastdb.herokuapp.com/createCustomer"
const DELETE_CUSTOMER = "https://roastdb.herokuapp.com/deleteCustomer"
const RENAME_CUSTOMER = "https://roastdb.herokuapp.com/renameCustomer"

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
