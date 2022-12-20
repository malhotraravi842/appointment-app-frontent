import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function loginUser(data) {
  const response = await API.post("/auth/login", data).then((res) => res);

  return response;
}
