ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

var { DatePicker, TextField, Card, CardHeader,AppBar, LinearProgress, CircularProgress } = MUI;

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
        <AppBar title="Booksharing" iconClassNameRight = "muidocs-icon-navigation-expand-more" />
        <LinearProgress mode="indeterminate" />
        <BookInput/>
          {this.data.allBooks.map(function(book,i) {
              return (
                <Book title={book.title} id={book._id} good={book.good} key={i}/>
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
