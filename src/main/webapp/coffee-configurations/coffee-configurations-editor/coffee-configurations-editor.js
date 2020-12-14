class CoffeeConfigurationsEditor extends React.Component {
  state = {
    coffeeConfiguration: {}
  }

  findCoffeeConfiguration = () => {
    let search = window.location.search.split("=")
    const coffeeConfiguration = search[1]
    findCoffeeConfiguration(coffeeConfiguration)
    .then(coffeeConfiguration => this.setState({coffeeConfiguration}))
  }

  componentDidMount = () => this.findCoffeeConfiguration()

  submitForm = () =>
      updateCoffeeConfigurationOrder(this.state.coffeeConfiguration.id, this.state.coffeeConfiguration.orderId)
      .then(() => updateCoffeeConfigurationCoffee(this.state.coffeeConfiguration.id, this.state.coffeeConfiguration.coffeeId))
      .then(() => updateCoffeeConfigurationCost(this.state.coffeeConfiguration.id, this.state.coffeeConfiguration.cost))
      .then(() => updateCoffeeConfigurationGrind(this.state.coffeeConfiguration.id, this.state.coffeeConfiguration.grind))
      .then(() => updateCoffeeConfigurationAmount(this.state.coffeeConfiguration.id, this.state.coffeeConfiguration.amount))
      .then(() => findCoffeeConfiguration)

  render() {
    return (
        <div className="container-fluid">
          <h1>CoffeeConfiguration Editor</h1>
          <form>
            <input
                value={"Order ID: " + this.state.coffeeConfiguration.orderId}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffeeConfiguration: {...this.state.coffeeConfiguration, orderId: event.target.value}
                      })}
                className="form-control"
                value={this.state.coffeeConfiguration.orderId}/>
            <input
                value={"Coffee ID: " + this.state.coffeeConfiguration.coffeeId}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffeeConfiguration: {...this.state.coffeeConfiguration, coffeeId: event.target.value}
                      })}
                className="form-control"
                value={this.state.coffeeConfiguration.coffeeId}/>
            <input
                value={"Cost: " + this.state.coffeeConfiguration.cost}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffeeConfiguration: {...this.state.coffeeConfiguration, cost: event.target.value}
                      })}
                className="form-control"
                value={this.state.coffeeConfiguration.cost}/>
            <input
                value={"Grind: " + this.state.coffeeConfiguration.grind}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffeeConfiguration: {...this.state.coffeeConfiguration, grind: event.target.value}
                      })}
                className="form-control"
                value={this.state.coffeeConfiguration.grind}/>
            <input
                value={"Amount: " + this.state.coffeeConfiguration.amount}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffeeConfiguration: {...this.state.coffeeConfiguration, amount: event.target.value}
                      })}
                className="form-control"
                value={this.state.coffeeConfiguration.amount}/>
            <button
                type="button"
                onClick={() => this.submitForm()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../coffee-configurations-list/coffee-configurations-list.html">
              Cancel
            </a>
          </form>
        </div>
    )
  }
}

ReactDOM.render(
    <CoffeeConfigurationsEditor/>,
    document.getElementById('root')
)
