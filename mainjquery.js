var UIController = (function() {
    var selecttype = $(`#type`).val()
    var deposit = $(`#deposit`).val()
    var withdraw = $(`#withdraw`).val()
    var balance = $(`#bal`).val()
    var type1 = $(`#depo`).val()
    var type2 = $(`#with`).val()
    var amount = $(`#amount`).val()
    var depstat = $(`#depstat`).val()
    var withstat = $(`#withstat`).val()

    return {
        bankData: {
            type: `selecttype`,
            deposit: `deposit`,
            withdraw: `withdraw`,
            balance: `balance`,
            type1: `type1`,
            type2: `type2`,
            amount: `amount`,
            depstat: `depstat`,
            withstat: `withstat`
        }
    }

})();
var ViewController = (function() {
    if (UIController.bankData.deposit == `Deposit`) {
        var balance = UIController.bankData.balance;
    } else {
        if (UIController.bankData.amount <= balance) {
            UIController.bankData.deposit = UIController.bankData.amount;
        } else {
            alert("lol")
        }
    }
    return {
        balanceData: {
            balanceRemaining: `balance`
        }
    }
})

function(UIController, ViewController) {
    if (UIController) {

    }
}