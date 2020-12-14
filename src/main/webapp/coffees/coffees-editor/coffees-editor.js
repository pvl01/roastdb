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
      updateCoffeeVendor(this.state.coffee.id, this.state.coffee.vendorId)
      .then(() => updateCoffeeRoast(this.state.coffee.id, this.state.coffee.roast))
      .then(() => updateCoffeeGrowingRegion(this.state.coffee.id, this.state.coffee.growingRegion))
      .then(() => updateCoffeeElevation(this.state.coffee.id, this.state.coffee.elevation))
      .then(() => findCoffee)

  render() {
    return (
        <div className="container-fluid">
          <h1>Coffee Editor</h1>
          <form>
            <input
                value={"Vendor ID: " + this.state.coffee.vendorId}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffee: {...this.state.coffee, vendorId: event.target.value}
                      })}
                className="form-control"
                value={this.state.coffee.vendorId}/>
            <input
                value={"Roast: " + this.state.coffee.roast}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffee: {...this.state.coffee, roast: event.target.value}
                      })}
                className="form-control"
                value={this.state.coffee.roast}/>
            <input
                value={"Growing Region: " + this.state.coffee.growingRegion}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffee: {...this.state.coffee, growingRegion: event.target.value}
                      })}
                className="form-control"
                value={this.state.coffee.growingRegion}/>
            <input
                value={"Elevation: " + this.state.coffee.elevation}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        coffee: {...this.state.coffee, elevation: event.target.value}
                      })}
                className="form-control"
                value={this.state.coffee.elevation}/>
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
