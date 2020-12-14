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

  submitFormFirst = () =>
      renameCustomer(this.state.customer.id, this.state.customer.firstName)
      .then(this.findCustomer)

  submitFormLast = () =>
      renameCustomerLast(this.state.customer.id, this.state.customer.lastName)
      .then(this.findCustomer)

  submitFormUsername = () =>
      updateCustomerUsername(this.state.customer.id, this.state.customer.username)
      .then(this.findCustomer)

  submitFormPassword = () =>
      updateCustomerPassword(this.state.customer.id, this.state.customer.password)
      .then(this.findCustomer)

  submitFormEmail = () =>
      updateCustomerEmail(this.state.customer.id, this.state.customer.email)
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
                onClick={() => this.submitFormFirst()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../customers-list/customers-list.html">
              Cancel
            </a>
          </form>
          <form>
            <input
                value={this.state.customer.lastName}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        customer: {...this.state.customer, lastName: event.target.value}
                      })}
                className="form-control"
                value={this.state.customer.lastName}/>
            <button
                type="button"
                onClick={() => this.submitFormLast()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../customers-list/customers-list.html">
              Cancel
            </a>
          </form>
          <form>
            <input
                value={this.state.customer.username}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        customer: {...this.state.customer, username: event.target.value}
                      })}
                className="form-control"
                value={this.state.customer.username}/>
            <button
                type="button"
                onClick={() => this.submitFormUsername()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../customers-list/customers-list.html">
              Cancel
            </a>
          </form>
          <form>
            <input
                value={this.state.customer.password}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        customer: {...this.state.customer, password: event.target.value}
                      })}
                className="form-control"
                value={this.state.customer.password}/>
            <button
                type="button"
                onClick={() => this.submitFormPassword()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../customers-list/customers-list.html">
              Cancel
            </a>
          </form>
          <form>
            <input
                value={this.state.customer.email}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        customer: {...this.state.customer, email: event.target.value}
                      })}
                className="form-control"
                value={this.state.customer.email}/>
            <button
                type="button"
                onClick={() => this.submitFormEmail()}
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
