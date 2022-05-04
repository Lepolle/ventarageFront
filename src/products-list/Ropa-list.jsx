import React , {useEffect, useState}from 'react'
import {fetchWithoutToken} from "../helpers/fetch";
import CollectionPreviewComponent from "../collection-preview/collection-preview.component";

function FetchProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchWithoutToken('Products/?search=ropa')
            .then(response => response.json())
            .then(datos => {
                setProducts(datos)
            })
    },[])

    return products

}
const RopaComponent = (props ) => {
    const data = FetchProducts();

        console.log(data)
    return (
        <div className='ropa-component' color='gray'>
            {data.map(({ id, ...item }) => (
                <CollectionPreviewComponent key={id} {...item} />
            ))}
        </div>

    )
}

export default RopaComponent