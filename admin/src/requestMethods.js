import axios from "axios";

const BASE_URL = "https://aura-backend-5f6l.onrender.com;
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser;
console.log("object");
console.log(currentUser);
console.log(TOKEN);
// console.log(TOKEN)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
