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
import customTheme from '../App/CustomTheme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    marginBox: {
        margin: theme.spacing(2)
    },
    leftEmptySpace: {
        flexGrow: 1,
    },
    toolbar: {
        paddingTop: theme.spacing(1)
    },
    buttonText: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    tableCell: {
        padding: theme.spacing(1),
        borderBottom: 0
    },
    tableCellTitle: {
        backgroundColor: customTheme.palette.primary.grey
    },
    noMargin: {
        margin: '0 !important'
    },
    noPadding: {
        padding: '0 !important'
    },
    noBorder: {
        border: '0 !important'
    }
}))

const CharacterProfileView = ({
    data,
    onModeChange
}) => {
    const classes = useStyles()

    return (
        <Container maxWidth='md' className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            component='img'
                            alt='Contemplative Reptile'
                            height='140'
                            image='https://author.today/content/2020/05/23/420985604e9e4f6e8b628e107f0b7800.jpg?width=265&height=400&mode=max'
                            title='Contemplative Reptile'
                        />

                        <CardContent className={classes.noPadding}>
                            <Table>
                                <TableBody>
                                    <TableRow className={classes.table}>
                                        <TableCell className={`${classes.tableCell} ${classes.tableCellTitle}`}>
                                            Мир
                                            </TableCell>
                                        <TableCell className={classes.tableCell}>
                                            Спиритум
                                            </TableCell>
                                    </TableRow>

                                    <TableRow className={classes.tableRow}>
                                        <TableCell className={`${classes.tableCell} ${classes.tableCellTitle}`}>
                                            Имя
                                            </TableCell>
                                        <TableCell className={classes.tableCell}>
                                            Гримм
                                            </TableCell>
                                    </TableRow>

                                    <TableRow className={classes.tableRow}>
                                        <TableCell className={`${classes.tableCell} ${classes.tableCellTitle}`}>
                                            Раса
                                            </TableCell>
                                        <TableCell className={classes.tableCell}>
                                            Человек
                                            </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item container xs={8}>
                    <Paper className={classes.paper}>
                        <Box className={classes.marginBox}>
                            <Typography
                                variant='h5'
                                component='h2'>
                                {data.name}
                            </Typography>
                        </Box>

                        <Divider variant='middle' />

                        <Box className={classes.marginBox}>
                            <Typography
                                variant='body2'
                                component='p'
                                color='textSecondary'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus, minus delectus, laboriosam perspiciatis molestiae cum accusamus velit vitae numquam error, labore exercitationem voluptate deleniti ab at illo dolorum repellendus?
                            </Typography>
                        </Box>

                        <Divider variant='fullWidth' />
                    </Paper>
                </Grid>
                <Grid item container xs={12}>
                    <Paper className={classes.paper}>
                        <Box className={classes.marginBox}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nemo laboriosam animi, expedita veniam nisi magnam dolore cum numquam fuga exercitationem nesciunt quisquam, a iure tempore velit non eaque. Perferendis?
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Toolbar disableGutters className={classes.toolbar}>
                <div className={classes.leftEmptySpace}></div>

                <Button edge='start'
                    variant='contained'
                    color='primary'
                    onClick={e => onModeChange(e)}>
                    <EditIcon />
                    <Typography
                        variant='inherit'
                        className={classes.buttonText}>
                        Edit
                    </Typography>
                </Button>
            </Toolbar>
        </Container>
    );
}

CharacterProfileView.propTypes = {
    data: PropTypes.object.isRequired,
    onModeChange: PropTypes.func.isRequired
}

export default CharacterProfileView