class BodyNoteEditor extends React.Component {
  state = {
    note: {bodyNote: ''}
  }

  findBodyNote = () => {
    let search = window.location.search.split("=")
    const note = search[1]
    findBodyNote(note)
    .then(note => this.setState({note}))
  }

  componentDidMount = () => this.findBodyNote()

  submitForm = () =>
      renameBodyNote(this.state.note.bodyNote, this.state.note.bodyNote)
      .then(this.findBodyNote)

  render() {
    return (
        <div className="container-fluid">
          <h1>Body Note Editor {this.state.note.bodyNote}</h1>
          <form>
            <input
                value={this.state.note.bodyNote}
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
