var { DatePicker, TextField, Card, CardHeader, FlatButton,CardMedia,CardTitle } = MUI;


BookInput = React.createClass({
  childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
  getInitialState: function() {
   return {value: 'Hello!'};
 },
 _handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
  },
 _handleSubmit: function(event) {
   Books.insert({title: this.state.value})
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      allBooks: Books.find().fetch()
    };
  },
 render: function() {
   return (
     <div>
       <h1>{this.state.value}</h1>
      <TextField
       multiLine={true} value={this.state.value} onChange={this._handleChange}/>
     <FlatButton label="登録" type="submit" onClick={this._handleSubmit}/>
     </div>
   );
 }
});
