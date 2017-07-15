function loaded(){
  document.getElementById('captchaCheck').value = document.getElementsByClassName("form-group col-sm-5 col-md-5 col-md-offset-3 has-feedback")[0].children[0].innerText;
  document.getElementById('uname').select();

  var footer = document.getElementsByClassName('box-footer')[0];
  var para = document.createElement('p');
  var msg = document.createTextNode("Made with ♥ Abhishek Kankani");
  para.style.cssText= "font-size: 12px; text-align: center;";
  para.appendChild(msg);

  footer.appendChild(para);

  console.log("Made with ♥, Abhishek Kankani")
};

loaded();
