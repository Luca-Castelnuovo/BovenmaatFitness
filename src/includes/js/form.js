function validEmail(email) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function buttonsState(active, form) {
    const buttons = form.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = !active;
    }
}

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log("formData", formData);
    
        if (!validEmail(formData.get("email"))) {
            document.querySelector("#email_invalid").style.display = "block";
            return false;
        }
    
        document.querySelector("#email_invalid").style.display = "none";
        buttonsState(false, form);
    
        fetch("/", {
            method: "POST",
            headers: {
                Accept: "application/x-www-form-urlencoded;charset=UTF-8",
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams(formData).toString()
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error("Not 200 response");
                }
    
                form.style.display = "none";
                document.querySelector("#thankyou_message").style.display =
                    "block";
            })
            .catch(() => {
                document.querySelector("#submission_invalid").style.display =
                    "block";
                buttonsState(true, form);
            });
    });
}
