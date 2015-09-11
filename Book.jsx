var { DatePicker, TextField, Card, CardHeader, FlatButton,CardMedia,CardTitle } = MUI;

Book = React.createClass({
   _goodbtn: function(){
     if(!Tickets.findOne({userId: Meteor.userId(),BookId: this.props.id})){
       Meteor.call("goodbtn",this.props.id);
     }else{
       console.log("重複不可能");
     }
   },
   mixins: [ReactMeteorData],
   getMeteorData() {
     return {
       allComments: Comments.find({BookId: this.props.id}).fetch()
     };
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
        <FlatButton label="イイね" onClick={this._goodbtn} />
          <span>  {this.props.good}</span>
        <FlatButton label="コメント" />
        {this.data.allComments.map(function(data){
          return (
            <span>{data.Contents}</span>
          );
        })}
      </Card>
     </div>
   );
 }
});
