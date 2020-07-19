import React from 'react'
import PropTypes from 'prop-types'
import {
    Avatar,
    Grid,
    List,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    tableCellHeader: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    }
}))

const StatsView = ({
    data
}) => {
    const classes = useStyles()

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container alignItems='center' justify='center'>
                    <Avatar className={classes.avatar}>
                        M
                    </Avatar>
                    <Typography variant='h5'>
                        Основные
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align='center'
                                    variant='head'
                                    className={classes.tableCellHeader}
                                >
                                    <Typography variant='button'>
                                        Характеристика
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    align='center'
                                    variant='head'
                                    className={classes.tableCellHeader}
                                >
                                    <Typography variant='button'>
                                        База
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    align='center'
                                    variant='head'
                                    className={classes.tableCellHeader}
                                >
                                    <Typography variant='button'>
                                        Прирост
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    align='center'
                                    variant='head'
                                    className={classes.tableCellHeader}
                                >
                                    <Typography variant='button'>
                                        Чистое значение
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    align='center'
                                    variant='head'
                                    className={classes.tableCellHeader}
                                >
                                    <Typography variant='button'>
                                        Значение с бонусами экипировки
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(parameter => (
                                <TableRow>
                                    <TableCell align='center'>
                                        {parameter.name}
                                    </TableCell>
                                    <TableCell align='center'>
                                        200
                                    </TableCell>
                                    <TableCell align='center'>
                                        25
                                    </TableCell>
                                    <TableCell align='center'>
                                        200
                                    </TableCell>
                                    <TableCell align='center'>
                                        242
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default StatsView