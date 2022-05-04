import React , {useEffect, useState}from 'react'
import {fetchWithoutToken} from "../helpers/fetch";
import CollectionPreviewComponent from "../collection-preview/collection-preview.component";

function FetchProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchWithoutToken('Products/?search=comestibles')
            .then(response => response.json())
            .then(datos => {
                setProducts(datos)
            })
    },[])

    return products

}
const ComestibleComponent = (props ) => {
    const data = FetchProducts();

        console.log(data)
    return (
        <div className='comestibles-component' color='gray'>
            {data.map(({ id, ...item }) => (
                <CollectionPreviewComponent key={id} {...item} />
            ))}
        </div>

    )
}

export default ComestibleComponent