'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
  // debugger
    return tweet.replace(/ to | two | too /g, " 2 ").replace(/ for | four /ig, " 4 ").replace(/be\b/g, "b").replace(/ you /g, " u ").replace(/ at /g, " @ ").replace(/ and /g, " & ");
  },

  bulkShortener: function(tweets){
    var array = [];
        for(var i= 0; i<tweets.length; i++){
        array.push(this.wordSubstituter(tweets[i]));
        }
    return array;
  },

  selectiveShortener: function(tweet){
    if ( tweet.length > 140) {
      return this.wordSubstituter(tweet);
    }
    else {return tweet}
  },

  shortenedTruncator: function(tweet){
    var shortTweet = this.selectiveShortener(tweet);
    if ( shortTweet.length > 140) { return shortTweet.slice(0, 137)+"...";  }
    else {  return shortTweet  }
  },
};
// 'Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best @ everything, u know what I mean? Tweeting is super fun u guys!!!!', 'OMG u guys, u won't believe how sweet my kitten is. My kitten is like super cuddly & 2 cute 2 b believed right?', 'GUISEEEEE this is so fun! I'm tweeting 4 u guys & this tweet is SOOOO long it's gonna b way more than u would think twitter can handle, so shorten it up u know what I mean? I just can never tell how long 2 keep typing!', 'New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy & mammogram soon. Prevention is key! #swag', 'I'm running out of example tweets 4 u guys, which is weird, because I'm a writer & this is just writing & I tweet all day. For real, u guys. For real.' ]
// 'Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best @ everything, u know what I mean? Tweeting is super fun u guys!!!!', 'OMG u guys, u won't believe how sweet my kitten is. My kitten is like super cuddly & 2 cute 2 b believed right?', 'GUISEEEEE this is so fun! I'm tweeting 4 u guys & this tweet is SOOOO long it's gonna b way more than u would think twitter can handle, so shorten it up u know what I mean? I just can never tell how long 2 keep typing!', 'New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy & mammogram soon. Prevention is key! #swag', 'I'm running out of example tweets 4 u guys, which is weird, because I'm a writer & this is just writing & I tweet all day. 4 real, u guys. 4 real.' ].
