var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

// T.post('statuses/update', {
//     status: 'I am born '
//   },
//   function(err, data, response) {
//     if (err){
//       console.log('Error!');
//       console.log(err);
//     }
//     else{
//        console.log(data);
//     }
//   });
var stream = T.stream('statuses/filter', { track: ['#fun ',' #good','#awesome'] })

stream.on('tweet', function (tweet) {
	var tweet_text=tweet.text;
	var nameID=tweet.id_str;
	var username =tweet.user.screen_name;
	var folowers =tweet.user.followers_count;

  console.log(username + " this is the username ");
  console.log(folowers+ "the followers_count");
  console.log(tweet_text);
  // T.post('statuses/update', {in_reply_to_status_id: nameID, status: "hi "  + '@' + username + " you have " + folowers + "followers.  #roguebot" }, function(err, data, response) {
  //           if(err){
  //               console.log("Error");
  //               console.log(err);
  //           }
  //           //console.log(response);
  //           console.log("done posting tweet/n")
  //       }) ;
T.post('friendships/create',{screen_name:username },function(err, data, response) {
if(err){
                console.log("Error");
                console.log(err);
            }
            console.log(response);
});
});