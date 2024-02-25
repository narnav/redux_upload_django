import React, {  useState } from 'react';
import './App.css';
import axios from 'axios'
import { Task } from './features/counter/Task';
function App() {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const MY_SERVER = "http://127.0.0.1:8000";
    const [img, setimg] = useState(null)
    const [tasks, settasks] = useState([])

    const addstudent = () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("description", content);
        formData.append("image", img);
        console.log(formData);
        axios.post(MY_SERVER + "/upload_image/", formData).then((r) => loadData());
    };
    const handleImgUpl = (files) => {
        setimg(files[0])
    }
    const loadData = async () => {
        axios.get(MY_SERVER + "/get_all_images").then(res => settasks(res.data));
    };
    return (
        <div className="App">
           <Task></Task>
        </div>
    );
}

export default App;
