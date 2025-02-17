import { drawTableRows, registerForm, loginForm } from "./dom.js";
import { User } from "./user.js";


window.onload = drawTableRows(User.usersList); 