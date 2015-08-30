options = {
    consumer_key: "NGSO3Fu9GVRA7ebMHs6ahrHAf",
    consumer_secret: "VtVRgIENMIcGJCCwa7JoJyVvylw5ZgVBAhmi1AGcpULgcgCMAp",
    access_token_key: "541346116-zbBh9CAWggtfMzLgkbEri1STuI9OylYr3xwkmHOF",
    access_token_secret: "Wfmp7mT2Bd5OJazorxFp28Xj3pAtuN6eaV39mqg68tmKj"
}
var client = new Twitter(options);

var params = {screen_name: "konojunya"};

Twitter.getAsync(client, 'statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      tweets.map((tweet)=>{
        if(tweet.text.indexOf('kaito105coco527') != -1)
        console.log(tweet.text)
      })
    }
});
