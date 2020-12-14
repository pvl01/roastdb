class CoffeesList extends React.Component {
  state = {
    coffees: []
  }

  findAllCoffees = () =>
      findAllCoffees()
      .then(coffees => this.setState({coffees}))

  createCoffee = () =>
      createCoffee()
      .then(() => this.findAllCoffees())

  deleteCoffee = (coffee) =>
      deleteCoffee(coffee)
      .then(() => this.findAllCoffees())

  componentDidMount = () => {
    this.findAllCoffees()
  }

  render() {
    return (
        <div className="container-fluid">
          <button
              className="btn btn-success float-right"
              onClick={() => this.createCoffee()}>
            Create
          </button>
          <a className="btn btn-danger float-right"
             href="../../index.html">
            Home
          </a>
          <h1>Coffees List</h1>
          <table className="table">
            <thead>
            <tr>
              <th>Coffee ID</th>
              <th>Roast</th>
              <th>Growing Region</th>
              <th>Elevation</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.coffees.map(coffee =>
                  <tr key={coffee.id}>
                    <td>{coffee.id}</td>
                    <td>{coffee.roast}</td>
                    <td>{coffee.growingRegion}</td>
                    <td>{coffee.elevation}</td>
                    <td>
                      <a className="btn btn-primary float-right"
                         href={`../coffees-editor/coffees-editor.html?coffee=${coffee.id}`}>
                        Edit
                      </a>
                      <button className="btn btn-danger float-right"
                              onClick={() => this.deleteCoffee(
                                  coffee.id)}>
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
    <CoffeesList/>,
    document.getElementById('root')
)
