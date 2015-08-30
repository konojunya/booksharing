var { DatePicker, TextField, Card, CardHeader, FlatButton,CardMedia,CardTitle } = MUI;

Book = React.createClass({
  _removeBooks: function(event) {
    Meteor.call("removeBook",this.props.id)
   },
 render: function() {
   card_style = {
     width: '25%',
     float: 'left',
     margin: '2% 2%',
     backgroundColor: 'white'
   };
   card_media_style = {
     height: '100%'
   };
   return (
     <div>
      <Card style = {card_style}>
        <CardMedia overlay={<CardTitle title={this.props.title} subtitle="Subtitle"/>}>
          <img style = {card_media_style} src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <input type="button" value="Delete" onClick={this._removeBooks}/>
       </Card>
     </div>
   );
 }
});
