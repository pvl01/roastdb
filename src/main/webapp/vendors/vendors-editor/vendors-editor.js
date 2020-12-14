class VendorsEditor extends React.Component {
  state = {
    vendor: {}
  }

  findVendor = () => {
    let search = window.location.search.split("=")
    const vendor = search[1]
    findVendor(vendor)
    .then(vendor => this.setState({vendor}))
  }

  componentDidMount = () => this.findVendor()

  submitForm = () =>
      renameVendor(this.state.vendor.id, this.state.vendor.name)
      .then(() => updateVendorOrigin(this.state.vendor.id, this.state.vendor.origin))
      .then(() => findVendor)

  render() {
    return (
        <div className="container-fluid">
          <h1>Vendor Editor</h1>
          <form>
            <input
                value={"Name: " + this.state.vendor.name}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        vendor: {...this.state.vendor, name: event.target.value}
                      })}
                className="form-control"
                value={this.state.vendor.name}/>
            <input
                value={"Origin: " + this.state.vendor.origin}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        vendor: {...this.state.vendor, origin: event.target.value}
                      })}
                className="form-control"
                value={this.state.vendor.origin}/>
            <button
                type="button"
                onClick={() => this.submitForm()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../vendors-list/vendors-list.html">
              Cancel
            </a>
          </form>
        </div>
    )
  }
}

ReactDOM.render(
    <VendorsEditor/>,
    document.getElementById('root')
)
