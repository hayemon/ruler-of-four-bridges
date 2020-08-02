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
        marginRight: theme.spacing(1)
    },
    tableCellHeader: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    section: {
        marginTop: theme.spacing(2)
    }
}))

const StatsView = ({
    stats,
    category,
    level
}) => {
    const classes = useStyles()

    const calculate = (stat) => {
        if (stat.relationType == 'linear') {
            return Math.round(((parseFloat(stat.base) + parseFloat(stat.change) * (level - 1)) + Number.EPSILON) * 100) / 100
        }
        else {
            console.log(stat)
            return Math.round(((parseFloat(stat.base) * Math.pow(parseFloat(stat.change), (level - 1))) + Number.EPSILON) * 100) / 100
        }
    }

    return (
        <Grid
            container
            spacing={3}
            className={classes.section}
        >
            <Grid item xs={12}>
                <Grid container alignItems='center' justify='center'>
                    <Avatar className={`${classes.avatar} background-rock-black`}>
                        <div className='text-gold'>/</div>
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
                                    className={`${classes.tableCellHeader} table-cell-name`}
                                >
                                    <Typography variant='button'>
                                        Характеристика
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    align='center'
                                    variant='head'
                                    className={`${classes.tableCellHeader} table-cell-base`}
                                >
                                    <Typography variant='button'>
                                        База
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    align='center'
                                    variant='head'
                                    className={`${classes.tableCellHeader} table-cell-change`}
                                >
                                    <Typography variant='button'>
                                        Прирост
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    align='center'
                                    variant='head'
                                    className={`${classes.tableCellHeader} table-cell-value`}
                                >
                                    <Typography variant='button'>
                                        Чистое значение
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                stats
                                    .map((stat, index) => (
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
                                                {calculate(stat)}
                                            </TableCell>
                                        </TableRow>
                                    ))
                            }
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