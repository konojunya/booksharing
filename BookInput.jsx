BookInput = React.createClass({
  getInitialState: function() {
   return {value: 'Hello!'};
 },
 _handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
    console.log(event);
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
      <p>
        {this.data.allBooks.map(function(book) {
            return <p>{book.title}</p>;
          })}
      </p>
       <input type="text" value={this.state.value} onChange={this._handleChange} />
       <input type="submit" value="登録" onClick={this._handleSubmit} />
     </div>
   );
 }
});
