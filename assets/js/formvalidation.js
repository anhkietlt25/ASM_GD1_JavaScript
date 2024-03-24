document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("mainForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (checkInputs()) {
            showModal();
        }
    });

    name.addEventListener("input", () => {
        validateField(
            name,
            name.value.trim() !== "",
            "Không được để trống tên"
        );
    });

    email.addEventListener("input", () => {
        validateField(
            email,
            isEmail(email.value.trim()),
            "Không được để trống email"
        );
    });

    phone.addEventListener("input", () => {
        validateField(
            phone,
            isPhone(phone.value.trim()),
            "Không được để trống SDT"
        );
    });

    password.addEventListener("input", () => {
        validateField(
            password,
            password.value.trim().length >= 8,
            "Nhập lại password của bạn trong 8 ký tự"
        );
    });

    message.addEventListener("input", () => {
        validateField(
            message,
            message.value.trim() !== "",
            "Không được để trống message"
        );
    });

    function checkInputs() {
        let checkValid = true;
        validateField(
            name,
            name.value.trim() !== "",
            "Không được để trống tên"
        );
        validateField(
            email,
            isEmail(email.value.trim()),
            "Không được để trống email"
        );
        validateField(
            phone,
            isPhone(phone.value.trim()),
            "Không được để trống SDT"
        );
        validateField(
            password,
            password.value.trim().length >= 8,
            "Nhập lại password của bạn trong 8 ký tự"
        );
        validateField(
            message,
            message.value.trim() !== "",
            "Không được để trống message"
        );

        document.querySelectorAll(".form-control").forEach((control) => {
            if (control.classList.contains("errol")) {
                checkValid = false;
            }
        });
        return checkValid;
    }

    function validateField(input, condition, errolMess) {
        if (condition) {
            setSuccess(input);
        } else {
            setErrol(input, errolMess);
        }
    }

    function setErrol(input, mess) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector(".icon");
        formControl.className = "form-control errol";
        icon.className = "icon fas fa-times-circle ";
        input.placeholder = mess;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector(".icon");
        formControl.className = "form-control success";
        icon.className = "icon fas fa-check-circle ";
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    function isPhone(phone) {
        return /^\+?(\d.*){3,}$/.test(phone);
    }

    function showModal() {
        const modal = document.getElementById("successFully");
        modal.style.display = "block";
        const closeBTN = document.querySelector(".close-btn");
        closeBTN.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (even) {
            if (even.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});
