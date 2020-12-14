class OrdersEditor extends React.Component {
  state = {
    order: {}
  }

  findOrder = () => {
    let search = window.location.search.split("=")
    const order = search[1]
    findOrder(order)
    .then(order => this.setState({order}))
  }

  componentDidMount = () => this.findOrder()

  submitForm = () =>
      updateOrderCustomer(this.state.order.id, this.state.order.customerId)
      .then(() => updateOrderTotalCost(this.state.order.id, this.state.order.totalCost))
      .then(() => updateOrderPurchaseDate(this.state.order.id, this.state.order.purchaseDate))
      .then(() => updateOrderArrivalDate(this.state.order.id, this.state.order.arrivalDate))
      .then(() => findOrder)

  render() {
    return (
        <div className="container-fluid">
          <h1>Order Editor</h1>
          <form>
            <input
                value={"Customer ID: " + this.state.order.customerId}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        order: {...this.state.order, customerId: event.target.value}
                      })}
                className="form-control"
                value={this.state.order.customerId}/>
            <input
                value={"Total Cost: " + this.state.order.totalCost}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        order: {...this.state.order, totalCost: event.target.value}
                      })}
                className="form-control"
                value={this.state.order.totalCost}/>
            <input
                value={"Purchase Date: " + this.state.order.purchaseDate}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        order: {...this.state.order, purchaseDate: event.target.value}
                      })}
                className="form-control"
                value={this.state.order.purchaseDate}/>
            <input
                value={"Arrival Date: " + this.state.order.arrivalDate}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        order: {...this.state.order, arrivalDate: event.target.value}
                      })}
                className="form-control"
                value={this.state.order.arrivalDate}/>
            <button
                type="button"
                onClick={() => this.submitForm()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../orders-list/orders-list.html">
              Cancel
            </a>
          </form>
        </div>
    )
  }
}

ReactDOM.render(
    <OrdersEditor/>,
    document.getElementById('root')
)
