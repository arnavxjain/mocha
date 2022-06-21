// get user from localstorage and return as json
export const getUserFromHandler = () => {
    let toBeParsed = window.localStorage.getItem("user");
    if (toBeParsed !== "undefined") {
        let res = JSON.parse(toBeParsed);
        return res;
    }
};

// save user to localstorage
export const saveUserByHandler = (USER) => {
    localStorage.setItem("user", JSON.stringify(USER));
};

// boolean return checking method
export const doesUserExist = () => {
    if (getUserFromHandler() == null) {
        return false;
    }
    return true;
};

export const logout = () => {
    localStorage.setItem("user", null);
    window.location.pathname = "/login";
};
