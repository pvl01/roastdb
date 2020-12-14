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
      updateOrderTotalCost(this.state.order.orderId,
          this.state.order.totalCost)
      .then(this.findOrder)

  render() {
    return (
        <div className="container-fluid">
          <h1>Order Editor</h1>
          <form>
            <input
                value={this.state.order.totalCost}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        order: {
                          ...this.state.order,
                          totalCost: event.target.value
                        }
                      })}
                className="form-control"
                value={this.state.order.totalCost}/>
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
