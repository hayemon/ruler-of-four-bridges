import React from 'react'
import {
    Container,
    Card,
    CardActionArea,
    CardMedia,
    Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import NavBar from '../NavBar'

const useStyles = makeStyles((theme) => ({
    bookContainer: {
        flexGrow: 1
    },
    bookCard: {
        margin: theme.spacing(4),
        transition: 'transform .5s',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    }
}))

const Landing = () => {
    const classes = useStyles()

    return (
        <div className='landing'>
            <NavBar landing />

            <Container maxWidth='md' className={classes.bookContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card className={classes.bookCard}>
                            <CardActionArea onClick={() => window.open('https://author.today/work/73879')}>
                                <CardMedia
                                    component='img'
                                    alt='Гримуар I'
                                    image='https://sun6-19.userapi.com/dCZgnI3xQgO4HTYNton4amKfd_LqYTkR3I8n-A/GMhk6MA-d0M.jpg'
                                    title='Гримуар I'
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card className={classes.bookCard}>
                            <CardActionArea onClick={() => window.open('https://author.today/work/73885')}>
                                <CardMedia
                                    component='img'
                                    alt='Гримуар II'
                                    image='https://sun6-14.userapi.com/ETJwDOfsQjoCF37optHU9UbHF_PpiHB_kPn-FQ/0XhNHvSeXvo.jpg'
                                    title='Гримуар II'
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card className={classes.bookCard}>
                            <CardActionArea onClick={() => window.open('https://author.today/work/73891')}>
                                <CardMedia
                                    component='img'
                                    alt='Плазма'
                                    image='https://sun6-19.userapi.com/72jHDzbR15SaDDXxa-D5UgFWVYfddkv4VdIqjg/xRGrASLcG_U.jpg'
                                    title='Плазма'
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Landing