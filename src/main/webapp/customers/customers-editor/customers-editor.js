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

  getFirstName = () => {
    if (this.state.customer.firstName) {
      return this.state.customer.firstName
    } else {
      return "First Name"
    }
  }

  getLastName = () => {
    if (this.state.customer.lastName) {
      return this.state.customer.lastName
    } else {
      return "Last Name"
    }
  }

  getUsername = () => {
    if (this.state.customer.username) {
      return this.state.customer.username
    } else {
      return "Username"
    }
  }

  getPassword = () => {
    if (this.state.customer.password) {
      return this.state.customer.password
    } else {
      return "Password"
    }
  }

  getEmail = () => {
    if (this.state.customer.email) {
      return this.state.customer.email
    } else {
      return "Email"
    }
  }

  submitForm = () =>
      renameCustomer(this.state.customer.id, this.state.customer.firstName)
      .then(this.renameCustomerLast(this.state.customer.id, this.state.customer.lastName))
      .then(this.updateCustomerUsername(this.state.customer.id, this.state.customer.username))
      .then(this.updateCustomerPassword(this.state.customer.id, this.state.customer.password))
      .then(this.updateCustomerEmail(this.state.customer.id, this.state.customer.email))
      .then(this.findCustomer)

  render() {
    return (
        <div className="container-fluid">
          <h1>Customer Editor</h1>
          <form>
            <input
                value={() => this.getFirstName()}
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
                value={() => this.getLastName()}
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
                value={() => this.getUsername()}
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
                value={() => this.getPassword()}
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
                value={() => this.getEmail()}
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
