import {fetchWithoutToken} from "./fetch";

export const loadProducts = async() => {
    const response = await fetchWithoutToken('Products/');
    const body = await response.json();
    const products = {}

    const data = {}

    body.forEach(product => {
        data.push({
            id: product.id,
            name: product.name,
            img: product.img,
            descripcion: product.descripcion,
            precio: product.precio
        });
    });
    products.data = data;

    return products


}