import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name: string, phone: string, address: string, bankdetails: string, username: string, email: string, password: string) {
    return axios.post(API_URL + "signup", {
      name,
      phone,
      address,
      bankdetails,
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
