import React from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2)
    }
}))

const TemplatesView = ({
    data
}) => {
    const classes = useStyles()

    return (
        <Container maxWidth='md' className={classes.root}>
            <Grid container spacing={3}>
                {data.map(templateItem => (
                    <Grid item xs={4}>
                        <Card key={templateItem._id} className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    alt='Contemplative Reptile'
                                    height='140'
                                    image='https://author.today/content/2020/05/23/420985604e9e4f6e8b628e107f0b7800.jpg?width=265&height=400&mode=max'
                                    title='Contemplative Reptile'
                                />

                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='h2'>
                                        Template Header
                                    </Typography>

                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        component='p'>
                                        Template Text: [Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae libero porro delectus nisi, quia tempore beatae dolorem earum nesciunt corrupti, perspiciatis est nulla hic? Mollitia sit aspernatur velit officia?]
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions>
                                <Button
                                    size='small'
                                    color='primary'
                                    href={`/templates/${templateItem._id}`}>
                                    Template Button
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default TemplatesView