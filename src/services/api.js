import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzkxZTQ1NGNlNjgzZTQ5NTIzM2RlZTgwYjM2ODVkOCIsInN1YiI6IjYwM2I2MmQxY2I1YzhlNjQ2ZTIxZGU1MyIsInNjb3BlcyI6WyJhcG"
export default axios.create({
    baseURL: "https://api.themovie.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})