class OrdersList extends React.Component {
  state = {
    orders: []
  }

  findAllOrders = () =>
      findAllOrders()
      .then(orders => this.setState({orders}))

  createOrder = () =>
      createOrder()
      .then(() => this.findAllOrders())

  deleteOrder = (order) =>
      deleteOrder(order)
      .then(() => this.findAllOrders())

  componentDidMount = () => {
    this.findAllOrders()
  }

  render() {
    return (
        <div className="container-fluid">
          <button
              className="btn btn-success float-right"
              onClick={() => this.createOrder()}>
            Create
          </button>
          <a className="btn btn-danger float-right"
             href="../../index.html">
            Home
          </a>
          <h1>Orders List</h1>
          <table className="table">
            <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Total Cost</th>
              <th>Purchase Date</th>
              <th>Arrival Date</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.orders.map(order =>
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.customerId}</td>
                    <td>{order.totalCost}</td>
                    <td>{order.purchaseDate}</td>
                    <td>{order.arrivalDate}</td>
                    <td>
                      <a className="btn btn-primary float-right"
                         href={`../orders-editor/orders-editor.html?order=${order.orderId}`}>
                        Edit
                      </a>
                      <button className="btn btn-danger float-right"
                              onClick={() => this.deleteOrder(
                                  order.orderId)}>
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
    <OrdersList/>,
    document.getElementById('root')
)
