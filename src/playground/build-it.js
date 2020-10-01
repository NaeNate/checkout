class Visiblity extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
    this.state = {
      toggle: false,
    };
  }
  handleToggleVisiblity() {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.handleToggleVisiblity}>
          {this.state.toggle ? "Hide Details" : "Show Details"}
        </button>

        <p>{this.state.toggle && "Here are some details."}</p>
      </div>
    );
  }
}

ReactDOM.render(<Visiblity />, document.getElementById("app"));
