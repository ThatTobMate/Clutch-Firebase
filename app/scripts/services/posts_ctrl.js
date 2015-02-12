'use strict';
app.factory('Post', function ($resource) {
return $resource('https://clutchgaming.firebaseio.com/posts/:id.json');
  // var ref = new Firebase(FIREBASE_URL);
  // var posts = $firebase(ref.child('post')).$asArray();

  //  // console.log(ref.child('games').child('consoles').orderByChild('Xbox One'))

  // var Post = {
  //   all: posts,
  //   ref: ref
  // };

  // return Post;
});