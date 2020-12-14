class CoffeeConfigurationsList extends React.Component {
  state = {
    coffeeConfigurations: []
  }

  findAllCoffeeConfigurations = () =>
      findAllCoffeeConfigurations()
      .then(coffeeConfigurations => this.setState({coffeeConfigurations}))

  createCoffeeConfiguration = () =>
      createCoffeeConfiguration()
      .then(() => this.findAllCoffeeConfigurations())

  deleteCoffeeConfiguration = (coffeeConfiguration) =>
      deleteCoffeeConfiguration(coffeeConfiguration)
      .then(() => this.findAllCoffeeConfigurations())

  componentDidMount = () => {
    this.findAllCoffeeConfigurations()
  }

  render() {
    return (
        <div className="container-fluid">
          <button
              className="btn btn-success float-right"
              onClick={() => this.createCoffeeConfiguration()}>
            Create
          </button>
          <a className="btn btn-danger float-right"
             href="../../index.html">
            Home
          </a>
          <h1>Coffee Configurations List</h1>
          <table className="table">
            <thead>
            <tr>
              <th>Coffee Configuration ID</th>
              <th>Order ID</th>
              <th>Coffee ID</th>
              <th>Cost</th>
              <th>Grind</th>
              <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.coffeeConfigurations.map(coffeeConfiguration =>
                  <tr key={coffeeConfiguration.id}>
                    <td>{coffeeConfiguration.id}</td>
                    <td>{coffeeConfiguration.orderId}</td>
                    <td>{coffeeConfiguration.coffeeId}</td>
                    <td>{coffeeConfiguration.cost}</td>
                    <td>{coffeeConfiguration.grind}</td>
                    <td>{coffeeConfiguration.amount}</td>
                    <td>
                      <a className="btn btn-primary float-right"
                         href={`../coffee-configurations-editor/coffee-configurations-editor.html?coffeeConfiguration=${coffeeConfiguration.id}`}>
                        Edit
                      </a>
                      <button className="btn btn-danger float-right"
                              onClick={() => this.deleteCoffeeConfiguration(
                                  coffeeConfiguration.id)}>
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
    <CoffeeConfigurationsList/>,
    document.getElementById('root')
)
