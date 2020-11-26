class BodyNoteEditor extends React.Component {
  state = {
    note: {bodyNote: "Balanced"}
  }

  findBodyNote = () => {
    let search = window.location.search.split("=")
    const note = search[1]
    findBodyNote(note)
    .then(note => this.setState({note}))
  }

  componentDidMount = () => this.findBodyNote()

  submitForm = () =>
      renameBodyNote("Balanced", this.state.note.bodyNote)
      .then(this.findBodyNote)

  render() {
    return (
        <div className="container-fluid">
          <h1>Body Note Editor {"Balanced"}</h1>
          <form>
            <input
                value={"Balanced"}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        note: {...this.state.note, bodyNote: event.target.value}
                      })}
                className="form-control"
                value={this.state.note.bodyNote}/>
            <button
                type="button"
                onClick={() => this.submitForm()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../../body-note-list/body-note-list.html">
              Cancel
            </a>
          </form>
        </div>
    )
  }
}

ReactDOM.render(
    <BodyNoteEditor/>,
    document.getElementById('root')
)
