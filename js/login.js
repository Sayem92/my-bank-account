console.log('hui')
document.getElementById('btn-submit').addEventListener('click',function(){
   const emailField= document.getElementById('user-email')
   const email = emailField.value;

   const passwordField = document.getElementById('user-password');
   const password = passwordField.value ;

   if(email == 'sayem@sum.com'  && password == 12345){
    window.location.href = 'account.html'
    }
    else{
        alert('Tui tor account password bulcos, tore ami dukte dimu na!!!')
    }
 });