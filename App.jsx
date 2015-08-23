App = React.createClass({
  render() {
    return (
      <div>
        <Book name="junjun"/>
        <Book name="takashi"/>
        <BookInput/>
      </div>
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'));
  });
}
