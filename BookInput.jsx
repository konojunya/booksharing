BookInput = React.createClass({
  getInitialState: function() {
   return {value: 'Hello!'};
 },
 handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
    console.log(event);
  },
 render: function() {
   return <input type="text" value={this.state.value} onChange={this.handleChange} />;
 }
});
