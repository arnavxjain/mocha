import axios from "axios";

function login(email, password) {
    console.log(email, password);
    axios
        .post("http://localhost:8888/login", {
            email,
            password,
        })
        .then((res) => {
            console.log(res);
        });
}

export default login;
