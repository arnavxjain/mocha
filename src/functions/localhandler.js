// get user from localstorage and return as json
export const getUserFromHandler = () => {
    let res = JSON.parse(localStorage.getItem("user"));
    return res;
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
