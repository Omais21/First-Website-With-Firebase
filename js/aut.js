if(auth !=null){
    if(auth == 'login'){
      loginPanel.style = 'display:block';
      signUpPanel.style = 'display:none';
    }else if(auth == 'signup'){
      loginPanel.style = 'display:none';
      signUpPanel.style = 'display:block';
    }
  }