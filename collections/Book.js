Books = new Mongo.Collection("books");
Tickets = new Mongo.Collection("tickets");

if(Meteor.isServer){
  Meteor.methods({
    removeBook: function (bookId) {
      Books.remove(bookId);
    },
    goodbtn: function(BookId){
      Tickets.insert({userId: Meteor.userId(),BookId: BookId});
      Books.update(BookId,{$inc:{good: 1}});
    }
  });
}
