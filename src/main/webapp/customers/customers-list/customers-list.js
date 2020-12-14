class CustomersList extends React.Component {
  state = {
    customers: []
  }

  findAllCustomers = () =>
      findAllCustomers()
      .then(customers => this.setState({customers}))

  createCustomer = () =>
      createCustomer()
      .then(() => this.findAllCustomers())

  deleteCustomer = (customer) =>
      deleteCustomer(customer)
      .then(() => this.findAllCustomers())

  componentDidMount = () => {
    this.findAllCustomers()
  }

  render() {
    return (
        <div className="container-fluid">
          <button
              className="btn btn-success float-right"
              onClick={() => this.createCustomer()}>
            Create
          </button>
          <a className="btn btn-danger float-right"
             href="../../index.html">
            Home
          </a>
          <h1>Customers List</h1>
          <table className="table">
            <thead>
            <tr>
              <th>Customer ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Password</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.customers.map(customer =>
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.username}</td>
                    <td>{customer.password}</td>
                    <td>{customer.email}</td>
                    <td>
                      <a className="btn btn-primary float-right"
                         href={`../customer-editor/customer-editor.html?bodyNote=${customer.id}`}>
                        Edit
                      </a>
                      <button className="btn btn-danger float-right"
                              onClick={() => this.deleteCustomer(
                                  customer.id)}>
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
    <CustomersList/>,
    document.getElementById('root')
)
