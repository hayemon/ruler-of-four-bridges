import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Button,

    Card,
    CardContent,
    CardMedia,

    Container,
    Divider,
    Grid,
    Paper,

    Table,
    TableBody,
    TableRow,
    TableCell,

    Toolbar,
    Typography
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { makeStyles } from '@material-ui/core/styles'

import {
    SpaceBetweenGrid,
    TabsContainer
} from '../Layout'
import Stats from '../Stats'

const useStyles = makeStyles((theme) => ({

}))

const CharacterProfileView = ({
    characterProfile,
    onModeChange
}) => {
    const classes = useStyles()

    return (
        <Container maxWidth='md' className='root'>
            <Grid container spacing={3} alignItems='stretch'>
                <Grid item xs={4} container>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='Contemplative Reptile'
                            height='140'
                            image='https://author.today/content/2020/05/23/420985604e9e4f6e8b628e107f0b7800.jpg?width=265&height=400&mode=max'
                            title='Contemplative Reptile'
                        />

                        <CardContent className='no-padding fill-parent'>
                            <Table>
                                <TableBody>
                                    {characterProfile.details.map((detail, index) =>
                                        <TableRow key={index} className={classes.tableRow}>
                                            <TableCell className='small-padding background-grey'>
                                                {detail.key}
                                            </TableCell>
                                            <TableCell className='small-padding'>
                                                {detail.value}
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={8} container>
                    <Paper>
                        <Box className='basic-margin'>
                            <Typography
                                variant='h5'>
                                {characterProfile.name}
                            </Typography>
                        </Box>

                        <Divider variant='middle' />

                        <Box className='basic-margin'>
                            <Typography
                                variant='body2'
                                component='p'
                                color='textSecondary'>
                                {characterProfile.description}
                            </Typography>
                        </Box>

                        <Divider variant='fullWidth' />
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <TabsContainer>
                        <div tablabel='Параметры'>
                            <Stats
                                className='nullify'
                                category='main'
                                stats={characterProfile.stats}
                            />
                        </div>

                        <div tablabel='LABEL 2'>
                            label 2
                            </div>
                        <div tablabel='LABEL 3'>
                            label 3
                            </div>
                    </TabsContainer>
                </Grid>

                <Grid item xs={12}>
                    <Toolbar disableGutters>
                        <SpaceBetweenGrid>
                            <Button
                                pulledright='true'
                                edge='start'
                                variant='contained'
                                color='primary'
                                onClick={e => onModeChange(e)}
                            >
                                <EditIcon />
                                <Typography
                                    variant='inherit'
                                    className='button-text'
                                >
                                    Изменить
                                </Typography>
                            </Button>
                        </SpaceBetweenGrid>
                    </Toolbar>
                </Grid>
            </Grid>
        </Container>
    );
}

CharacterProfileView.propTypes = {
    characterProfile: PropTypes.object.isRequired,
    onModeChange: PropTypes.func.isRequired
}

export default CharacterProfileView