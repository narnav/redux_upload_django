import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskAsync } from './taskSlice';
export function Task() {
    // const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    
    const [img, setimg] = useState(null)
    const [tasks, settasks] = useState([])

    const addstudent = () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("description", content);
        formData.append("image", img);
        console.log(formData);
        dispatch(addTaskAsync(formData))
    };
    const handleImgUpl = (files) => {
        setimg(files[0])
    }
    const loadData = async () => {
        // axios.get(MY_SERVER + "/get_all_images").then(res => settasks(res.data));
    };

    return (
        <div className="App">
            {
                tasks.map(task => <div key={crypto.randomUUID() }>
                    {task.title},
                    {task.description},
                    <img style={{ width: "200px" }} src={MY_SERVER + '/static/images/' + task.image} />
                </div>
                )
            }
            <button onClick={() => addstudent()}>Add</button>
            title:<input onChange={(e) => settitle(e.target.value)} />
            content:<input onChange={(e) => setcontent(e.target.value)} />
            spic:<input type="file" onChange={(e) => handleImgUpl(e.target.files)} />
        </div>
    );
}
