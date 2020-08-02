import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    Paper,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
}))

const SkillItemView = ({
    _id,
    name,
    imgUrl,
    code,
    description
}) => {
    const classes = useStyles()
    const history = useHistory()

    return (
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <Card>
                    <CardActionArea href={`/skills/${_id}`}>
                        <CardMedia
                            component='img'
                            alt={name}
                            image={imgUrl}
                            title={name}
                        />
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={10} container>
                <Paper className='fill-parent'>
                    <Box className='basic-margin'>
                        <Typography
                            variant='h6'>
                            {name}
                        </Typography>
                        <Typography
                            variant='body2'
                            component='p'
                            color='textSecondary'>
                            {description}
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default SkillItemView