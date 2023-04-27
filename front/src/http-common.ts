import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  //baseURL: "http://f32d-2003-c9-7f32-3f00-5d37-d459-b183-6dd6.ngrok-free.app/api",
  headers: {
    "Content-type": "application/json"
  }
});