
import { drawTableRows } from "./dom.js";

export class User {
    static usersList = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    static count = 0;

    id;
    firstName;
    lastName;
    email;
    password;
    isLogedIn = false;

    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.id = User.count;
        User.count++;

        User.usersList.push(this);
        localStorage.setItem('users', JSON.stringify(User.usersList));
        drawTableRows(User.usersList);
    }

    static removeUser(id) {
        User.usersList = User.usersList.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(User.usersList));
        drawTableRows(User.usersList);
    }

    static login(id) {
        const user = User.usersList.find((user) => user.id === id);
        user.isLogedIn = true;
        localStorage.setItem('users', JSON.stringify(User.usersList));
        drawTableRows(User.usersList);
    }

    static logout(id) {
        const user = User.usersList.find((user) => user.id === id);
        user.isLogedIn = false;
        localStorage.setItem('users', JSON.stringify(User.usersList));
        drawTableRows(User.usersList);
    }

    static editUser(id, firstName, lastName, email) {
        const user = User.usersList.find((user) => user.id === id);
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        localStorage.setItem('users', JSON.stringify(User.usersList));
        drawTableRows(User.usersList);

    }

    static changePassword(id, oldPassword, newPassword) {
        const user = User.usersList.find((user) => user.id === id);
        if (user.password === oldPassword) {
            user.password = newPassword;
            localStorage.setItem('users', JSON.stringify(User.usersList));
            drawTableRows(User.usersList);
        } else { alert("identification faild"); }
    }

}

