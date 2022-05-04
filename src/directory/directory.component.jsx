import React , {useEffect, useState}from 'react'

import './directory.styles.scss'
import {fetchWithoutToken} from "../helpers/fetch";

import MenuItem from '../menu-item/menu-item.component'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function FetchCategories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchWithoutToken('Category/')
            .then(response => response.json())
            .then(datos => {
                setCategories(datos)
            })
    },[])

    return categories


}




const DirectoryComponent = (props ) => {
    const data = FetchCategories();

    return (
        <React.Fragment>
            <div className='directory-menu' color='gray'>
                {data.map(({id, ...item}) => (
                    <MenuItem key={id} {...item} />
                ))}
            </div>
            {(!data?.length) && <Box mt={2}><Typography variant={"h3"}>No se encontraron elementos.</Typography></Box>}
        </React.Fragment>
    )
}

export default DirectoryComponent