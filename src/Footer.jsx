import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Link, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer:{
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#282c34',
        textSecondary: 'orange',
        marginTop: theme.spacing(0),
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]:{
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(6),
        }
    },

}));

function Copyright(){
    return (
        <Typography variant="body2" color="textPrimary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/dashboard">
                Ventarage
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const footers = [
    {
        title: 'Compañía',
        description: ['Equipo', 'Contáctenos', 'Ubicaciones'],
    },{
        title: 'Legal',
        description:['Política de privacidad', 'Términos de uso'],
    },
];

function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="xl" components="footer" className={classes.footer} color='gray'>
                <Grid container spacing={0} justify="space-evenly">
                    {footers.map((footer) =>(
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) =>(
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Footer;