App = React.createClass({
  render() {
    return (
      <Book />
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'));
  });
}
