import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectProds, getProdsAsync, addProdAsync } from './prodSlice'
const Prod = () => {
    const dispatch = useDispatch();
    const Prods = useSelector(selectProds);
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState(null)
    useEffect(() => {
        dispatch(getProdsAsync())
    }, [])

    return (
        <div>
            <hr></hr>
            description: <input onChange={(e) => setDescription(e.target.value)} />
            price: <input onChange={(e) => setPrice(e.target.value)} />
            image: <input type='file' onChange={(e) => setImage(e.target.files)} />
            <button className='btn btn-primary' onClick={() => dispatch(addProdAsync({ description, price }))}>add product to my server - admin</button>
            <hr></hr>
            Items - {Prods.length}
            <div class="row row-cols-1 row-cols-md-5 g-4">
                {Prods.map(prod => <div class="col">
                    <div class="card">
                        <img src={"https://picsum.photos/20" +prod.id } class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{prod.id} , {prod.image},</h5>
                            <p class="card-text"> {prod.description}  , Only {prod.price}</p>
                            <button className='btn btn-primary'>Buy</button>
                            <button className='btn btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Prod

