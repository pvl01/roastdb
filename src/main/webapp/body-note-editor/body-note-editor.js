class BodyNoteEditor extends React.Component {
  state = {
    oldNote: {},
    newNote: {}
  }

  componentDidMount = () => this.findBodyNote()

  findBodyNote = () => {
    let search = window.location.search.split("=")
    const bodyNote = search[1]
    findBodyNote(bodyNote)
    .then(oldNote => this.setState({oldNote}))
  }

  submitForm = () =>
      renameBodyNote(this.state.oldNote.bodyNote, this.state.newNote.bodyNote)
      .then(this.findBodyNote)

  render() {
    return (
        <div className="container-fluid">
          <h1>Body Note Editor {this.state.oldNote.bodyNote}</h1>
          <form>
            <input
                value={this.state.oldNote.bodyNote}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        newNote: {...this.state.newNote, bodyNote: event.target.value}
                      })}
                className="form-control"
                value={this.state.oldNote.bodyNote}/>
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
          <a href={`../../body-note-list/body-note-list.html?bodyNote=${this.state.oldNote.bodyNote}`}>
            Body Note List
          </a>
        </div>
    )
  }
}

ReactDOM.render(
    <BodyNoteEditor/>,
    document.getElementById('root')
)
