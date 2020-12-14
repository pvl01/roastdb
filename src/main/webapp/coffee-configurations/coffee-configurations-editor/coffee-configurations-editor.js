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
      updateCoffeeConfigurationCost(this.state.coffeeConfiguration.id,
          this.state.coffeeConfiguration.cost)
      .then(this.findCoffeeConfiguration)

  render() {
    return (
        <div className="container-fluid">
          <h1>Coffee Configuration Editor</h1>
          <form>
            <input
                value={this.state.coffeeConfiguration.cost}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffeeConfiguration: {
                          ...this.state.coffeeConfiguration,
                          cost: event.target.value
                        }
                      })}
                className="form-control"
                value={this.state.coffeeConfiguration.cost}/>
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
