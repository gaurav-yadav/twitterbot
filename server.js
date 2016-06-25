var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
   // config = require(path.join(__dirname, 'config.js'));
    config=require(path.join(__dirname, 'findhappiness.js'));

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
var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8'] ;
//bangalore '12.998493', '77.539616',   '12.866655', '77.687244'
//sf '-122.75', '36.8', '-121.75', '37.8'
var stream = T.stream('statuses/filter', { track: ['#fun ',' #good','#awesome']})//track: ['#fun ',' #good','#awesome']  locations: sanFrancisco

stream.on('tweet', function (tweet) {
	var tweet_text=tweet.text;
	var nameID=tweet.id_str;
	var username =tweet.user.screen_name;
	var folowers =tweet.user.followers_count;

  console.log(username + " this is the username ");
  console.log(folowers+ "the followers_count");
  console.log(tweet_text); 

  //Lets tweet back to everyone AIM- make my hastag trending )
  T.post('favorites/create', {id: nameID }, function(err, data, response) {
            if(err){
                console.log("Error");
                console.log(err);
            }
            //console.log(response);
            console.log("done posting tweet/n")
        }) ;
  //follow everyone with that hastag-- maybe i can follow everyone at intuit or everyone coming to CTOF-- problem unfollowing them
// T.post('friendships/create',{screen_name:username },function(err, data, response) {
// if(err){
//                 console.log("Error");
//                 console.log(err);
//             }
//             console.log(response);
// });
});