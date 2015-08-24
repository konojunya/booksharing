BookInput = React.createClass({
  getInitialState: function() {
   return {
     value: 'Hello!',
     color_name: 'red'
   };
 },
 _handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
  },
 _handleSubmit: function(event) {
   Books.insert({title: this.state.value})
  },
  _color: function(event){
    var color_array =['red','blue','yellow','green']
    var rand = Math.floor( Math.random() * 4)
    this.setState({color_name: color_array[rand]})
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      allBooks: Books.find().fetch()
    };
  },
 render: function() {
   var divStyle = {
      color: this.state.color_name
    };
   return (
     <div>
       <h1 style={divStyle}>{this.state.value}</h1>
      <p>
        {this.data.allBooks.map(function(book) {
            return <p>{book.title}</p>;
          })}
      </p>
       <input type="text" value={this.state.value} onChange={this._handleChange} />
       <input type="submit" value="登録" onClick={this._handleSubmit} />
       <input type="submit" value="color" onClick={this._color} />
     </div>
   );
 }
});
