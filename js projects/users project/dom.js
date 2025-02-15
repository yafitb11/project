import { User } from './user.js';

const drawTableRows = (users) => {
    const tableBody = document.querySelector('#users-table-body');

    tableBody.innerHTML = '';

    users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.isLogedIn ? 'מחובר' : 'מנותק'}</td>
        `;
        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'התנתקות';
        logoutBtn.addEventListener('click', () => {
            User.logout(user.id);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'מחיקה';
        deleteBtn.addEventListener('click', () => {
            User.removeUser(user.id);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'עריכה';
        editButton.addEventListener('click', () => {
            const editDiv = document.getElementById("editDiv");
            editDiv.style.display = "block";

            const editForm = document.getElementById("editForm");
            editForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const newfirstName = e.target.elements.firstNameEdit.value;
                const newlastName = e.target.elements.lastNameEdit.value;
                const newemail = e.target.elements.emailEdit.value;

                if (users.find((user) => user.email === newemail)) {
                    alert('משתמש עם כתובת דוא"ל זו כבר קיים');
                    return;
                }

                User.edditUser(user.id, newfirstName, newlastName, newemail);
                e.target.reset();
                editDiv.style.display = "none";
            })

        });


        const editPasswordButton = document.createElement('button');
        editPasswordButton.textContent = 'שינוי סיסמא';
        editPasswordButton.addEventListener('click', () => {
            const editPasswordDiv = document.getElementById("editPasswordDiv");
            editPasswordDiv.style.display = "block";

            const editPasswordForm = document.getElementById("editPasswordForm");
            editPasswordForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const oldPassword = e.target.elements.oldPassword.value;
                const newPassword = e.target.newPassword.value;
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
                if (!passwordRegex.test(newPassword)) {
                    alert('על הסיסמא להכיל לפחות 8 תוים, וביניהם לפחות אות אנגלית קטנה אחת, אות אנגלית גדולה אחת וספרה אחת.');
                    return;
                }
                User.changePassword(user.id, oldPassword, newPassword);

                e.target.reset();
                editPasswordDiv.style.display = "none";
            })
        });

        row.appendChild(logoutBtn);
        row.appendChild(deleteBtn);
        row.appendChild(editButton);
        row.appendChild(editPasswordButton);
        tableBody.appendChild(row);
    });
};



const registerForm = document.querySelector('.register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const users = User.usersList;

    if (users.find((user) => user.email === email)) {
        alert('משתמש עם כתובת דוא"ל זו כבר קיים');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('על הסיסמא להכיל לפחות 8 תוים, וביניהם לפחות אות אנגלית קטנה אחת, אות אנגלית גדולה אחת וספרה אחת.');
        return;
    }

    new User(firstName, lastName, email, password);
    e.target.reset();
});

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const user = User.usersList.find((user) => user.email === email);
    if (user && user.password === password) {
        User.login(user.id);
        e.target.reset();
    } else {
        alert('שם משתמש או סיסמה לא נכונים');
    }
});

export { drawTableRows, registerForm, loginForm };