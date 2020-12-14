class CustomersEditor extends React.Component {
  state = {
    customer: {}
  }

  findCustomer = () => {
    let search = window.location.search.split("=")
    const customer = search[1]
    findCustomer(customer)
    .then(customer => this.setState({customer}))
  }

  componentDidMount = () => this.findCustomer()

  submitForm = () =>
      renameCustomer(this.state.customer.id, this.state.customer.firstName)
      .then(this.findCustomer)

  render() {
    return (
        <div className="container-fluid">
          <h1>Customer Editor</h1>
          <form>
            <input
                value={this.state.customer.firstName}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        customer: {...this.state.customer, firstName: event.target.value}
                      })}
                className="form-control"
                value={this.state.customer.firstName}/>
            <button
                type="button"
                onClick={() => this.submitForm()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../customers-list/customers-list.html">
              Cancel
            </a>
          </form>
        </div>
    )
  }
}

ReactDOM.render(
    <CustomersEditor/>,
    document.getElementById('root')
)
