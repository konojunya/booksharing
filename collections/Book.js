Books = new Mongo.Collection("books");
if(Meteor.isServer){
  Meteor.methods({
    removeBook: function (bookId) {
      Books.remove(bookId);
    }
  });
}
