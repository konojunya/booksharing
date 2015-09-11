Books = new Mongo.Collection("books");
Tickets = new Mongo.Collection("tickets");

Books.allow({
  insert: function(){
    return Meteor.userId()?true:false;
  },
  update: function(){
    return Meteor.userId()?true:false;
  },
  remove: function(){
    return Meteor.userId()?true:false;
  }
});

if(Meteor.isServer){
  Meteor.methods({
    goodbtn: function(BookId){
      Tickets.insert({userId: Meteor.userId(),BookId: BookId});
      Books.update(BookId,{$inc:{good: 1}});
    }
  });
}
