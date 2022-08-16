document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount) || newWithdrawAmount < 0){
        alert('Please provide a valid number');
        return;
       }


    const previousWithdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = previousWithdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalString);

    const previousTotalBalance = document.getElementById('total-balance');
     const previousTotalBalanceString = previousTotalBalance.innerText;
     const previousMainBalance = parseFloat(previousTotalBalanceString);

     
    if(newWithdrawAmount > previousMainBalance){
        alert('baap ar bank a ato taka nai!!!');
        return;
    }

     const currentWithdrawTotalbalance = previousWithdrawTotalAmount + newWithdrawAmount;
     previousWithdrawTotal.innerText = currentWithdrawTotalbalance; 

    const mainbalance = previousMainBalance - newWithdrawAmount;
    previousTotalBalance.innerText = mainbalance;

});