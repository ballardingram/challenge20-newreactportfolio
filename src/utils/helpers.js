// REQUIRED > VALIDATION FUNCTIONALITY
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function checkName(input) {
    const contactname =/^[a-zA-Z ]{2,30}$/
        if(input.match(contactname)) {
            return true;
            }
            return false;
    }
