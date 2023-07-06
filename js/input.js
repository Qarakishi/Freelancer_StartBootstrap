let requireds = document.querySelectorAll('#register .form-input input');
let fullName = document.querySelector('#register .form-input #full_name');
let email = document.querySelector('#register .form-input #email');
let textArea = document.querySelector('#register .form-group #textarea');
let inputPhone = document.querySelector('#register .form-phone input');
let register = document.querySelector('#register');
let button = document.querySelector('#register .button button');
let requiredsAll = document.querySelectorAll('#register .input');


function fillDataToObject(data, object) {
    // 1-ci usul
    // object = {
    //     fullname: data[0].value,
    //     email: data[1].value,
    //     inputPhone: data[2].value,
    //     textArea: data[3].value,
    // }

    object["fullname"] = data[0].value;
    object["email"] = data[1].value;
    object["inputPhone"] = data[2].value;
    object["textArea"] = data[3].value;
    return object;
}
function customizePlaceholderValue(selectorInputPhone) {
    const placeholderValue = selectorInputPhone.getAttribute("placeholder");
    const splitedPlaceholder = placeholderValue.split(" ");
    let newPlaceholderValue = "";
    for (const item of splitedPlaceholder) {
        newPlaceholderValue += item;
    }
    return newPlaceholderValue;
}


function showErrorMessage(obj) {
    if (obj.fullname === '' || obj.email === '' || obj.inputPhone === '' || obj.textArea === '') {
        if (obj.fullname === '') {
            redNotice(fullName);
        }
        if (obj.email === '') {
            redNotice(email);
        }
        if (obj.inputPhone === '') {
            inputPhoneNotice(inputPhone);
        }
        if (obj.textArea === '') {
            inputPhoneNotice(textArea)
        }
        document.querySelector('#register .button button').classList.add('disabled');
    } else {
        document.querySelector('#register .button button').classList.remove('disabled');
    }
}

function redNotice(inputItem) {
    inputItem.parentNode.nextElementSibling.classList.remove('d-none');
    inputItem.style.borderBottomColor = "#DC3545";
    inputItem.nextElementSibling.style.color = "#DC3545";
    inputItem.className = "exclamationMark";
}
function withoutNotice(inputWithout) {
    inputWithout.parentNode.nextElementSibling.classList.add('d-none');
    inputWithout.style.borderBottomColor = "#6c757d";
    inputWithout.nextElementSibling.style.color = "#6c757d";
    inputWithout.className = "check-icon";
}
function inputPhoneNotice(inputItem) {
    inputItem.parentNode.nextElementSibling.classList.remove('d-none');
    inputItem.style.borderBottomColor = "#DC3545";
    inputItem.className = "exclamationMark";
    inputItem.classList.add("color");
}
function inputPhoneWithout(inputWithout) {
    inputWithout.parentNode.nextElementSibling.classList.add('d-none');
    inputWithout.style.borderBottomColor = "#6c757d";
    inputWithout.style.color = "#6c757d";
    inputWithout.className = "check-icon";
}
function cursorChange() {
    if (button.classList.contains('disabled')) {
        button.parentNode.classList.remove("s-resize");
        button.parentNode.classList.add("not-allowed");
    }
}



for (let i = 0; i < requireds.length; i++) {
    requireds[i].addEventListener('blur', function () {
        if (this.value === '') {
            redNotice(this);
        } else {
            withoutNotice(this);
        }
    });
    requireds[i].addEventListener('keyup', function () {
        let obj = fillDataToObject(requiredsAll, {});
        if (this.value !== '') {
            if (this.value.length < 2) {
                redNotice(this);
            } else {
                withoutNotice(this);
            }
        }
        // console.log("obj 106: ", obj);
        showErrorMessage(obj);
    });
    cursorChange();
};
inputPhone.addEventListener('blur', function () {
    const resultPlaceholderValue = customizePlaceholderValue(this);
    if (this.value.length !== resultPlaceholderValue.length || this.value === '') {
        inputPhoneNotice(this);
        document.querySelector('#register .button button').classList.add('disabled');
    }
    else {
        inputPhoneWithout(this);
    }
    cursorChange();
});
inputPhone.addEventListener('keyup', function (ev) {
    let obj = fillDataToObject(requiredsAll, {});
    // console.log("obj 122 inputPhone: ", obj);
    if (ev.keyCode === 69) {
        inputPhone.value = '';
    }
    if (this.value !== '') {
        inputPhoneWithout(this);
    }
    else {
        inputPhoneNotice(this);
    }
    cursorChange();
    showErrorMessage(obj);
});
textArea.addEventListener('blur', function () {
    if (this.value === '' || this.value.length < 10) {
        redNotice(textArea);
        document.querySelector('#register .button button').classList.add('disabled');
    } else {
        withoutNotice(textArea);
    }
    cursorChange();
});
textArea.addEventListener('keyup', function (ev) {
    let obj = fillDataToObject(requiredsAll, {});
    // console.log('obj 145 textarea: ', obj);
    if (this.value !== '') {
        if (this.value.length > 10) {
            withoutNotice(textArea);
        }
    } else {
        redNotice(textArea);
    }
    cursorChange();
    showErrorMessage(obj);
});


// for(let i = 0; i < requiredsAll.length; i++){
//     if(requiredsAll[0].value === '' || requiredsAll[1].value === '' || requiredsAll[2].value === '' || requiredsAll[3].value === ''){
//         document.querySelector('#register .button button').classList.add('disabled');
//     }else{
//         document.querySelector('#register .button button').classList.remove('disabled');
//     }
// }

register.addEventListener('submit', function (e) {
    e.preventDefault();

    let obj = fillDataToObject(requiredsAll, {});

    for (let i = 0; i < requireds.length; i++) {
        if (requireds[i].value == '') {
            redNotice(requireds[i]);
        }
        if (inputPhone.value == '') {
            inputPhoneNotice(inputPhone);
        }
        if (textArea.value == '' || textArea.value.length < 10) {
            redNotice(textArea);
        }
        if (requireds.value === '' || inputPhone.value === '' || textArea.value === '') {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    };



    swal({
        title: "Confirm the correctness of the information you entered?",
        text: `Full name: ${obj.fullname}\nEmail: ${obj.email}\nPhone number: ${obj.inputPhone}\nMessage: ${obj.textArea}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Your message has been sent successfully! You will receive an answer shortly.", {
                    icon: "success",
                });
            }
        });

});




