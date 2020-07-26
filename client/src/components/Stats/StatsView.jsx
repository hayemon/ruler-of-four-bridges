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
    stats,
    category,
    level
}) => {
    const classes = useStyles()

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container alignItems='center' justify='center'>
                    <Avatar className={classes.avatar}>
                        /
                    </Avatar>
                    <Typography variant='h5'>
                        {category && category.value}
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
                            {stats.map((stat, index) => (
                                <TableRow key={index}>
                                    <TableCell
                                        align='left'
                                        className='background-grey'
                                    >
                                        {stat.name}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {stat.base}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {stat.change}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {Math.round(((parseFloat(stat.base) + parseFloat(stat.change) * (level - 1)) + Number.EPSILON) * 100) / 100}
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

StatsView.propTypes = {
    stats: PropTypes.array.isRequired,
    category: PropTypes.object.isRequired,
    level: PropTypes.number.isRequired
}

export default StatsView