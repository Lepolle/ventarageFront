import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Form, Formik} from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import {makeStyles} from "@material-ui/core/styles";
import {RegisElements} from "./SignUpElements";
import {useEffect, useState} from "react";
import {fetchWithoutToken} from "../../helpers/fetch";

const useStyles = makeStyles((theme) => ({
    Button: {
        backgroundColor: '#white',
        color: 'black',
        padding: '5px 35px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        borderRadius: '10px',
        border: '1px solid #646464'
    },
}));

function FetchUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchWithoutToken('Users/')
            .then(response => response.json())
            .then(datos => {
                setUsers(datos)
            })
    },[])

    return users


}



const Registrarse = () => {
    const img = styled.image`
    float: right; width: 50px;`;
    const classes = useStyles();
    const validate = Yup.object({
        username: Yup.string()
            .max(15, 'No mas de 15 caracteres'),
        email: Yup.string()
            .email('Email invalido')
            .required('Email requerido'),
        password: Yup.string()
            .min(4, 'La contraseña debe tener al menos 6 caracteres')
            .required('Contraseña requerido'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('contraseña'), null], 'Contraseña debe coincidir')
            .required('Confirmar contraseña es requerido'),
    })


    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="/">
                    Ventarage
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const theme = createTheme();
        return (
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{height: '100vh'}}>
                    <CssBaseline/>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://i.ibb.co/wwzXYvB/Ventarage.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Registro
                            </Typography>
                            <Formik
                                initialValues={{
                                    username: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: ''
                                }}
                                validationSchema={validate}
                                onSubmit={values => {
                                    console.log(values)
                                }}>
                                {formik => (
                                    <div>
                                        <h1 className="my-4 font-weight-bold .display-4"></h1>
                                        <Form>
                                            <RegisElements label="Nombre de usuario" name="username" type="text"/>
                                            <RegisElements label="Email" name="email" type="email"/>
                                            <RegisElements label="Contraseña" name="password" type="password"/>
                                            <RegisElements label="Confirmar Contraseña" name="confirmPassword"
                                                           type="password"/>
                                            <buttom className="btn btn-dark mt-3" type="submit">Registrar</buttom>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </Box>

                    </Grid>
                </Grid>
            </ThemeProvider>

        )
};

export default Registrarse;
