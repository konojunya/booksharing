var { DatePicker, TextField, Card, CardHeader, FlatButton,CardMedia,CardTitle } = MUI;

Book = React.createClass({
  _removeBooks: function(event) {
    Meteor.call("removeBook",this.props.id)
   },
 render: function() {
   card_style = {
     width: '30%',
     float: 'left'
   };
   return (
     <div>
      <Card style = {card_style}>
        <CardMedia overlay={<CardTitle title={this.props.title} subtitle="Subtitle"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
       </Card>
       <input type="button" value="Delete" onClick={this._removeBooks}/>
     </div>
   );
 }
});
