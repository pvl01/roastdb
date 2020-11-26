const FIND_ALL_BODY_NOTE = "https://roastdb.herokuapp.com/findAllBodyNote"
const FIND_BODY_NOTE = "https://roastdb.herokuapp.com/findBodyNote"
const CREATE_BODY_NOTE = "https://roastdb.herokuapp.com/createBodyNote"
const DELETE_BODY_NOTE = "https://roastdb.herokuapp.com/deleteBodyNote"
const RENAME_BODY_NOTE = "https://roastdb.herokuapp.com/renameBodyNote"

const findAllBodyNote = () =>
    fetch(`${FIND_ALL_BODY_NOTE}`)
    .then(response => response.json())

const findBodyNote = (bodyNote) =>
    fetch(`${FIND_BODY_NOTE}/${bodyNote}`)
    .then(response => response.json())

const createBodyNote = () =>
    fetch(`${CREATE_BODY_NOTE}`)
    .then(response => response.json())

const deleteBodyNote = (bodyNote) =>
    fetch(`${DELETE_BODY_NOTE}/${bodyNote}`)

const renameBodyNote = (oldBodyNote, newBodyNote) =>
    fetch(`${RENAME_BODY_NOTE}/${oldBodyNote}/${newBodyNote}`)
    .then(response => response.json())
