console.log('hui')
document.getElementById('btn-submit').addEventListener('click',function(){
   const emailField= document.getElementById('user-email')
   const email = emailField.value;

   const passwordField = document.getElementById('user-password');
   const password = passwordField.value ;

   if(email == 'sayem@sum.com'  && password == 'sabas'){
    window.location.href = 'account.html'
    }
    else{
        alert('Tui tor account password bujcos tore ami dukte dimu na!!!')
    }
 });