ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

var { DatePicker, TextField, Card, CardHeader, LinearProgress } = MUI;

App = React.createClass({
  childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    mixins: [ReactMeteorData],
    getMeteorData() {
      return {
        allBooks: Books.find().fetch()
      };
    },
  render() {
    return (
      <div>
        <LinearProgress mode="indeterminate"  />
        <BookInput/>
          {this.data.allBooks.map(function(book) {
              return (
                <Book title={book.title} id={book._id}/>
              );
          })}
      </div>
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'));
  });
}
