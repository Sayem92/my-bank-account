document.getElementById('btn-deposit').addEventListener('click',function(){
     const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);
  
    depositField.value = '';

     if(isNaN(newDepositAmount) || newDepositAmount < 0){
          alert('Please provide a valid number');
          return;
     }


    const previousDepositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = previousDepositTotal.innerText ;
    const previousDepositTotalBalance = parseFloat(previousDepositTotalString);
     
    const updateAmount = previousDepositTotalBalance + newDepositAmount;
     previousDepositTotal.innerText = updateAmount;

     const previousTotalBalance = document.getElementById('total-balance');
     const previousTotalBalanceString = previousTotalBalance.innerText;
     const previousMainBalance = parseFloat(previousTotalBalanceString);

     const currentTotalbalance = previousMainBalance + newDepositAmount;
     previousTotalBalance.innerText= currentTotalbalance ;

});