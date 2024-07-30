let id = url.searchParams.get('id');
if(!id){
  window.location.href = 'index.html';
}


let commentsPanel = document.getElementById('comments');
let commentHeading = document.getElementById('commentHeading');
let commentArea = document.getElementById('commentArea');
let commentSubmit = document.getElementById('commentSubmit');
let loginFromComment  =document.getElementById('loginFromComment');

//An observer when the user logs in or logs out
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
//user logs in
loginFromComment.style = 'display:none';
firebase.database().ref('users/' + user.uid).on('value', snap => {
  commentArea.style  ='display:block';
  commentSubmit.style = 'display:block';

  if(typeof snap.val().username == 'undefined'){
    commentHeading.innerHTML = snap.val().email;
  }else {
    commentHeading.innerHTML = snap.val().username;
  }
});

//adds the product to cart for the active user


  }else {
    //user logs out
    commentHeading.innerHTML = 'You are not logged in';
    commentArea.style  ='display:none';
    commentSubmit.style = 'display:none';
    loginFromComment.style = 'display:block';
  }
});

//An event listener when the user click on the button comment
commentSubmit.addEventListener('click', e => {
  let Puser = firebase.auth().currentUser;
  if(Puser != null){
  firebase.database().ref('users/' + Puser.uid).on('value', snap => {
    if(typeof snap.val().username == 'undefined'){
      setComment(snap.val().email, snap.key, commentArea.value, new Date());
    }else {
      setComment(snap.val().username, snap.key, commentArea.value, new Date());
    }
  });
}
});
//shows in screen the comments
firebase.database().ref('comments/' + id).on('child_added', snap => {
    buildComments(commentsPanel, snap);
});