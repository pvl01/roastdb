class BodyNoteList extends React.Component {
  state = {
    notes: []
  }

  findAllBodyNote = () =>
      findAllBodyNote()
      .then(notes => this.setState({notes}))

  createBodyNote = () =>
      createBodyNote()
      .then(() => this.findAllBodyNote())

  deleteBodyNote = (bodyNote) =>
      deleteBodyNote(bodyNote)
      .then(() => this.findAllBodyNote())

  componentDidMount = () => {
    this.findAllBodyNote()
  }

  render() {
    return (
        <div className="container-fluid">
          <button
              className="btn btn-success float-right"
              onClick={() => this.createBodyNote()}>
            Create
          </button>
          <a className="btn btn-danger float-right"
             href="../index.html">
            Home
          </a>
          <h1>Body Note List</h1>
          <table className="table">
            <tbody>
            {
              this.state.notes.map((bodyNote) =>
                  <tr key={bodyNote.note}>
                    <td>{bodyNote.note}</td>
                    <td>
                      <a className="btn btn-primary float-right"
                         href={`../body-note-editor/body-note-editor.html?bodyNote=${bodyNote.note}`}>
                        Edit
                      </a>
                      <button className="btn btn-danger float-right"
                              onClick={() => this.deleteBodyNote(
                                  bodyNote.note)}>
                        Delete
                      </button>
                    </td>
                  </tr>
              )
            }
            </tbody>
          </table>
        </div>
    )
  }
}

ReactDOM.render(
    <BodyNoteList/>,
    document.getElementById('root')
)
