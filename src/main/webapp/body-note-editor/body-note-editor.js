class BodyNoteEditor extends React.Component {
  state = {
    note: {}
  }

  componentDidMount = () => this.findBodyNote()

  findBodyNote = () => {
    let search = window.location.search.split("=")
    const bodyNote = search[1]
    findBodyNote(bodyNote)
    .then(note => this.setState({note}))
  }

  submitForm = () =>
      updateCourse(this.state.note)
      .then(this.findBodyNote)

  render() {
    return (
        <div className="container-fluid">
          <h1>Course Editor {this.state.note.bodyNote}</h1>
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
          <a href={`../../body-note-list/body-note-list.html?bodyNote=${this.state.note.bodyNote}`}>
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
