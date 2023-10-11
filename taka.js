let depositeBtn = document.getElementById('btn-deposite');

depositeBtn.addEventListener('click', function(){

    console.log("Deposite button Clicked");
    let depositeField = document.getElementById('deposite-field');
    let depositeFieldstring = depositeField.value;
    console.log(depositeFieldstring);
    depositeField.value = ""

    if (depositeFieldstring > 0){
        let depositeTotal = document.getElementById('deposite-total');
    let previousdepositeTotalString = depositeTotal.innerText  
    let newDepositeTotal = parseInt(previousdepositeTotalString) + parseInt(depositeFieldstring);
    console.log(newDepositeTotal);
    // typeof- I couldn't underestand
    depositeTotal.innerText = newDepositeTotal;



    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceTotalString = balanceTotal.innerText;
    let newBalanceTotal = parseInt(previousBalanceTotalString) + parseInt(depositeFieldstring);
    balanceTotal.innerText = newBalanceTotal;
    console.log(newBalanceTotal);


    }

   else{
    alert('Enter Positive Amount')
   }
    
});





// withdrow session
let withdrawBtn = document.getElementById('btn-withdraw');
withdrawBtn.addEventListener('click', function(){

    console.log("Withdraw button Clicked");
    let withdrawField = document.getElementById('withdraw-field');
    let withdrawFieldstring = withdrawField.value;
    console.log(withdrawFieldstring);
    withdrawField.value = ""


    


    if (withdrawFieldstring < 20000){

        let withdrawTotal = document.getElementById('withdraw-total');
    let previouswithdrawTotalString = withdrawTotal.innerText  
    let newWithdrawTotal = parseInt(previouswithdrawTotalString) + parseInt(withdrawFieldstring);
    console.log(newWithdrawTotal);
    withdrawTotal.innerText = newWithdrawTotal;



    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceTotalString = balanceTotal.innerText;
    let newBalanceTotal = parseInt(previousBalanceTotalString) - parseInt(withdrawFieldstring);
    balanceTotal.innerText = newBalanceTotal;
    console.log(newBalanceTotal);


    }

    else{
        alert('Access Denied')
    }


});