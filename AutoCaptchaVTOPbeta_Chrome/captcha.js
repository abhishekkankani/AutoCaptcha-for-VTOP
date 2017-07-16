function loaded(callback){
  document.getElementById('captchaCheck').value = document.getElementsByClassName("form-group col-sm-5 col-md-5 col-md-offset-3 has-feedback")[0].children[0].innerText;
  document.getElementsByClassName("form-group col-sm-5 col-md-5 col-md-offset-3 has-feedback")[0].style = "display:none";
  var footer = document.getElementsByClassName('box-body')[0];
  var para = document.createElement('p');
  var msg = document.createTextNode("Made with ♥ Abhishek Kankani");
  para.style.cssText= "font-size: 12px; text-align: center;";
  para.appendChild(msg);

  footer.appendChild(para);

  console.log("Made with ♥, Abhishek Kankani")

  callback();
};

loaded(function(){
  var uid = document.getElementById('uname');
  if (uid.value == ""){
    uid.focus();
  }
  else {
    var elem = document.getElementsByClassName('row col-xs-6')[0].children[0]
    elem.style = "background-color:#2a496f;";
    elem.focus();
  }
});


