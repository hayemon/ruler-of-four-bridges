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
    overlayBox: {
        position: 'absolute',
        color: 'white',
        backgroundColor: 'black',
        fontSize: '30px',
        opacity: '0.7',
        bottom: '0',
        width: '100%',
        textAlign: 'center'
    },
}))

const CharacterProfilesView = ({
    characterProfiles
}) => {
    const classes = useStyles()

    return (
        <Container maxWidth='md' className='root'>
            <Grid container spacing={5}>
                {
                    characterProfiles
                        .map(characterProfileItem => (
                            <Grid item
                                xs={3}
                                key={characterProfileItem._id}
                            >
                                <Card className='scale-on-hover'>
                                    <CardActionArea
                                        href={`/characterProfiles/${characterProfileItem._id}`}
                                    >
                                        <CardMedia
                                            component='img'
                                            alt={characterProfileItem.name}
                                            image={characterProfileItem.imgUrl}
                                            title={characterProfileItem.name}
                                        />
                                        <div className={classes.overlayBox}>
                                            {characterProfileItem.name}
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                }
            </Grid>
        </Container>
    );
}

export default CharacterProfilesView