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
      .then(() => renameCustomerLast(this.state.customer.id, this.state.customer.lastName))
      .then(() => updateCustomerUsername(this.state.customer.id, this.state.customer.username))
      .then(() => updateCustomerPassword(this.state.customer.id, this.state.customer.password))
      .then(() => updateCustomerEmail(this.state.customer.id, this.state.customer.email))
      .then(() => findCustomer)

  render() {
    return (
        <div className="container-fluid">
          <h1>Customer Editor</h1>
          <form>
            <input
                value={"First Name: " + this.state.customer.firstName}
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
            <input
                value={"Last Name: " + this.state.customer.lastName}
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
            <input
                value={"Username: " + this.state.customer.username}
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
            <input
                value={"Password: " + this.state.customer.password}
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
            <input
                value={"Email: " + this.state.customer.email}
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
