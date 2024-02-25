import axios from 'axios'

const MY_SERVER = "http://127.0.0.1:8000";
export function addTask(formData) {
    return axios.post(MY_SERVER + "/upload_image/", formData)
}
