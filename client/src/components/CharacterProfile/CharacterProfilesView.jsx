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
}))

const CharacterProfilesView = ({
    characterProfiles
}) => {
    const classes = useStyles()

    return (
        <Container maxWidth='md' className='root'>
            <Grid container spacing={3}>
                {
                    characterProfiles
                        .map(characterProfileItem => (
                            <Grid key={characterProfileItem._id} item xs={4}>
                                <Card>
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
                                                {characterProfileItem.name}
                                            </Typography>

                                            <Typography
                                                variant='body2'
                                                color='textSecondary'
                                                component='p'
                                            >
                                                {characterProfileItem.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    <CardActions>
                                        <Button
                                            size='small'
                                            color='primary'
                                            href={`/characterProfiles/${characterProfileItem._id}`}
                                        >
                                            Подробнее...
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                }
            </Grid>
        </Container>
    );
}

export default CharacterProfilesView