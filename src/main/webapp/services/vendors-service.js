const FIND_ALL_VENDORS =
    "https://roastdb.herokuapp.com/findAllVendors"
const FIND_VENDOR =
    "https://roastdb.herokuapp.com/findVendor"
const CREATE_VENDOR =
    "https://roastdb.herokuapp.com/createVendor"
const DELETE_VENDOR =
    "https://roastdb.herokuapp.com/deleteVendor"
const RENAME_VENDOR=
    "https://roastdb.herokuapp.com/renameVendor"
const UPDATE_VENDOR_ORIGIN=
    "https://roastdb.herokuapp.com/updateVendorOrigin"

const findAllVendors = () =>
    fetch(`${FIND_ALL_VENDORS}`)
    .then(response => response.json())

const findVendor = (vendor) =>
    fetch(`${FIND_VENDOR}/${vendor}`)
    .then(response => response.json())

const createVendor = () =>
    fetch(`${CREATE_VENDOR}`)
    .then(response => response.json())

const deleteVendor = (vendor) =>
    fetch(`${DELETE_VENDOR}/${vendor}`)

const renameVendor = (vendor, newName) =>
    fetch(`${RENAME_VENDOR}/${vendor}/${newName}`)
    .then(response => response.json())

const updateVendorOrigin = (vendor, newOrigin) =>
    fetch(`${UPDATE_VENDOR_ORIGIN}/${vendor}/${newOrigin}`)
    .then(response => response.json())
