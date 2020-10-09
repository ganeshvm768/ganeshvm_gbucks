$(() => {
    $(`#submit`).click(function() {
        $("#display").show(1000);

    })
    $(`#submit`).click(function() {
        $("#third").show(1000);

    })
});

function blink_text() {
    $('.blink').fadeOut(1000);
    $('.blink').fadeIn(500);
}

// function blink_text() {
//     $('#amountitle').fadeOut(72);
//     $('#amountitle').fadeIn(72);
// }
setInterval(blink_text, 1000);
var selecttype = document.getElementById(`type`);
var deposit = document.getElementById(`deposit`);
var withdraw = document.getElementById(`withdraw`);
var type1 = document.getElementById(`depo`);
var type2 = document.getElementById(`with`);
var mode1 = document.getElementById(`cash`);
var mode2 = document.getElementById(`cheque`);
var amount = document.getElementById(`amount`)
var depstat = document.getElementById(`depstat`);
var withstat = document.getElementById(`withstat`);
var bal = document.getElementById(`bal`)
var balanceArray = []


document.getElementById(`submit`).addEventListener(`click`, () => {
    var x = document.getElementById("mySelect1").selectedIndex;
    var y = document.getElementsByTagName(`option`)[x].value
    if (amount.value == ``) {
        alert(`Deposit Money First`)
    }
    if (y == `deposit` && amount.value != 0) {
        console.log(`deposit`);
        var balance = Number(amount.value);
        balanceArray.push(balance)
        deposit.value = balance;
        let sum = 0;
        for (let i = 0; i < balanceArray.length; i++) {
            sum += balanceArray[i];
        }
        bal.value = sum;
        depstat.innerText = `Rs.${sum} got deposited in the Account\nMessage has been sent to your registered\nmobile number `
        console.log(balance)
    } else if (y == `withdraw` && amount.value != 0) {
        console.log(`withdraw`)
        var balance = Number(amount.value)
        withdraw.value = balance;
        let sum = 0;
        for (let i = 0; i < balanceArray.length; i++) {
            sum += balanceArray[i];
        }
        let new_sum = sum;
        if (bal.value - balance < 0) {
            alert("Insufficent Balance")
        } else if (bal.value > 0) {
            bal.value = bal.value - balance;
            withstat.innerHTML = `Rs.${balance} was Withdrawn from the Account\nMessage has been sent to your registered\nmobile number `
            console.log(balance)
        }
        // else {
        //     alert(`Insufficent Balance`)
        // }
    } else if (y == `Select Type`) {
        alert(`Select Type of Transaction`)
    }

});