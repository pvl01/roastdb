class VendorsList extends React.Component {
  state = {
    vendors: []
  }

  findAllVendors = () =>
      findAllVendors()
      .then(vendors => this.setState({vendors}))

  createVendor = () =>
      createVendor()
      .then(() => this.findAllVendors())

  deleteVendor = (vendor) =>
      deleteVendor(vendor)
      .then(() => this.findAllVendors())

  componentDidMount = () => {
    this.findAllVendors()
  }

  render() {
    return (
        <div className="container-fluid">
          <button
              className="btn btn-success float-right"
              onClick={() => this.createVendor()}>
            Create
          </button>
          <a className="btn btn-danger float-right"
             href="../../index.html">
            Home
          </a>
          <h1>Vendors List</h1>
          <table className="table">
            <thead>
            <tr>
              <th>Vendor ID</th>
              <th>Name</th>
              <th>Origin</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.vendors.map(vendor =>
                  <tr key={vendor.id}>
                    <td>{vendor.id}</td>
                    <td>{vendor.name}</td>
                    <td>{vendor.origin}</td>
                    <td>
                      <a className="btn btn-primary float-right"
                         href={`../vendors-editor/vendors-editor.html?vendor=${vendor.id}`}>
                        Edit
                      </a>
                      <button className="btn btn-danger float-right"
                              onClick={() => this.deleteVendor(
                                  vendor.id)}>
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
    <VendorsList/>,
    document.getElementById('root')
)
