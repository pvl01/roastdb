class CoffeesEditor extends React.Component {
  state = {
    coffee: {}
  }

  findCoffee = () => {
    let search = window.location.search.split("=")
    const coffee = search[1]
    findCoffee(coffee)
    .then(coffee => this.setState({coffee}))
  }

  componentDidMount = () => this.findCoffee()

  submitForm = () =>
      updateCoffeeRoast(this.state.coffee.id,
          this.state.coffee.roast)
      .then(this.findCoffee)

  render() {
    return (
        <div className="container-fluid">
          <h1>Coffee Editor</h1>
          <form>
            <input
                value={this.state.coffee.roast}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffee: {
                          ...this.state.coffee,
                          roast: event.target.value
                        }
                      })}
                className="form-control"
                value={this.state.coffee.roast}/>
            <button
                type="button"
                onClick={() => this.submitForm()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger"
               href="../coffees-list/coffees-list.html">
              Cancel
            </a>
          </form>
        </div>
    )
  }
}

ReactDOM.render(
    <CoffeesEditor/>,
    document.getElementById('root')
)
