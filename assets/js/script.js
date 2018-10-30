$(function(){
  $('#valid').click(function(){
    validMail = $('#inputEmail4').val();
    validAdress = $('#inputAddress').val();
    validAdress2 = ('#input inputAddress2').val();
    validPassword = $('#inputPassword4').val();
    validZip =  $('#inputZip').val();
    validCity = $('#inputCity').val();
    regexCity =  /^[a-zA-Z0-9éè\s]+$/;
    regexZip = /^[0-9]+$/;
    regexPassword = /^[a-zA-Z0-9éè]+$/;
    regexAdress = /^[a-zA-Z0-9éè\s]+$/;
    regexadress2 = /^[a-zA-Z0-9éè\s]+$/;
    regexMail = /^[a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,6}$/;
    if(regexCity.test(validCity)){
      alert('Your city is ok');
    } else {
      alert('Your city is NOT ok');
    }
    if(regexZip.test(validZip)){
      alert('Your Zip is ok');
    } else {
      alert('Your Zip is NOT ok');
    }
    if(regexPassword.test(validPassword)){
      alert('Your password is ok');
    } else {
      alert('Your password is NOT ok');
    }
    if(regexadress2.test(validAdress2)){
      alert('Your Adress 2 is ok');
    } else {
      alert('Your Adress 2 NOT ok');
    }
    if(regexadress.test(validAdress)){
      alert('Your Adress is ok');
    } else {
      alert('Your adress is NOT ok');
    }
    if(regexMail.test(validMail)){
      alert('Your mail is ok');
    } else {
      alert('Your mail is NOT ok');
    }
  });
});
