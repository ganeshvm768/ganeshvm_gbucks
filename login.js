// $(function() {
//     var email = $(`#inputEmail`).val();
//     var password = $(`#inputPassword`).val();
//     $(`#signin`).onclick(function() {
//         if (email == `ganesh@gmail.com` && password == `ganesh`) {
//             window.open(`C:\Users\ASUS-Ganesh\Desktop\project\mainpage\main.html`);
//         } else {
//             alert(`Invalid Credentials`);


//         }

//     })
// })
// -------------------------------------------------------------------------------------
// var email = document.getElementById(`#inputEmail`).val();
// var password = document.getElementById(`#inputPassword`).val();
// document.getElementById(`#signin`).addEventListener(`click`, function() {
//     if (email === `ganesh@gmail.com` && password === `ganesh`) {
//         window.location.href = `C:\Users\ASUS-Ganesh\Desktop\project\mainpage\main.html`;
//     } else {
//         alert(`Invalid Credentials`);
//     }
// })
// ----------------------------------------------------------------------------------------------------
var attempt = 3;
var el = document.getElementById('#submit');
if (el) {
    el.addEventListener('click', function() {
        var username = document.getElementById("#inputEmail").value;
        var password = document.getElementById("#inputPassword").value;
        if (username == "ganesh@gmail.com" && password == "ganesh") {
            alert("Login successfully");
            window.location = "main.html"; // Redirecting to other page.
            return false;
        } else {
            attempt--; // Decrementing by one.
            alert("You have left " + attempt + " attempt;");
            // Disabling fields after 3 attempts.
            if (attempt == 0) {
                document.getElementById("#inputEmail").disabled = true;
                document.getElementById("#inputPassword").disabled = true;
                document.getElementById("#sigin").disabled = true;
                return false;
            }
        }
    });
}
// ---------------------------------------------------------------------------------------
// var $loginForm = $(".form-signin"),
//     $login_text_fields = $loginForm.find("input[type='text']");

// $(".login-logo,.form-container").removeClass("off-canvas");

// $loginForm.validate({
//     errorElement: "span",
//     success: function(label) {
//         _form_success_aria(label);
//     },
//     invalidHandler: function(event, validator) {
//         _form_error_aria(event);
//     }
// });

// function _form_success_aria(label) {
//     var target = label.parent().find("input");
//     target.attr("aria-invalid", "false");
// }

// function _form_error_aria(validator) {
//     console.log(validator.target.elements[0]);
// }