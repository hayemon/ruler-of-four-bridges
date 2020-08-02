import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core'

const SkillParametersView = ({
    level,
    areaParameters,
    maximumAffectedUnitsCount,
    timeParameters,
    costs,
    parameters
}) => {
    const {
        distance,
        radius,
        angleHorizontal,
        angleVertical,
        height,
        width
    } = areaParameters

    const {
        isChanneling,
        cooldown,
        cast,
        duration,
        interval,
        delay
    } = timeParameters

    const calculate = (base, change, level) => (
        Math.round(((parseFloat(base) + parseFloat(change) * (level - 1)) + Number.EPSILON) * 100) / 100
    )

    const tableHeader = () => (
        <TableHead>
            <TableRow>
                <TableCell
                    align='center'
                    variant='head'
                    className='table-cell-name'
                >
                    <Typography variant='button'>
                        Характеристика
                                    </Typography>
                </TableCell>

                <TableCell
                    align='center'
                    variant='head'
                    className='table-cell-base'
                >
                    <Typography variant='button'>
                        База
                                    </Typography>
                </TableCell>

                <TableCell
                    align='center'
                    variant='head'
                    className='table-cell-change'
                >
                    <Typography variant='button'>
                        Прирост
                                    </Typography>
                </TableCell>

                <TableCell
                    align='center'
                    variant='head'
                    className='table-cell-value'
                >
                    <Typography variant='button'>
                        Значение
                                    </Typography>
                </TableCell>
            </TableRow>
        </TableHead>
    )

    const areaTable = () => (
        <Fragment>
            {
                distance &&
                distance.base &&
                distance.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Дальность применения
                                    </TableCell>
                    <TableCell align='center'>
                        {distance.base}
                    </TableCell>
                    <TableCell align='center'>
                        {distance.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(distance.base, distance.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                radius &&
                radius.base &&
                radius.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Радиус действия
                                    </TableCell>
                    <TableCell align='center'>
                        {radius.base}
                    </TableCell>
                    <TableCell align='center'>
                        {radius.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(radius.base, radius.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                angleHorizontal &&
                angleHorizontal.base &&
                angleHorizontal.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Охват по горизонтали (градусы)
                                    </TableCell>
                    <TableCell align='center'>
                        {angleHorizontal.base}
                    </TableCell>
                    <TableCell align='center'>
                        {angleHorizontal.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(angleHorizontal.base, angleHorizontal.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                angleVertical &&
                angleVertical.base &&
                angleVertical.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Охват по вертикали (градусы)
                                    </TableCell>
                    <TableCell align='center'>
                        {angleVertical.base}
                    </TableCell>
                    <TableCell align='center'>
                        {angleVertical.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(angleVertical.base, angleVertical.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                width &&
                width.base &&
                width.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Ширина охвата (метры)
                                    </TableCell>
                    <TableCell align='center'>
                        {width.base}
                    </TableCell>
                    <TableCell align='center'>
                        {width.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(width.base, width.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                height &&
                height.base &&
                height.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Высота охвата (метры)
                                    </TableCell>
                    <TableCell align='center'>
                        {height.base}
                    </TableCell>
                    <TableCell align='center'>
                        {height.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(height.base, height.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                maximumAffectedUnitsCount &&
                maximumAffectedUnitsCount.base &&
                maximumAffectedUnitsCount.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Максимальное количество целей
                                    </TableCell>
                    <TableCell align='center'>
                        {maximumAffectedUnitsCount.base}
                    </TableCell>
                    <TableCell align='center'>
                        {maximumAffectedUnitsCount.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(maximumAffectedUnitsCount.base, maximumAffectedUnitsCount.change, level)}
                    </TableCell>
                </TableRow>
            }
        </Fragment>
    )

    const timeTable = () => (
        <Fragment>
            {
                isChanneling &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Продолжительное
                                    </TableCell>
                    <TableCell align='center' colSpan='3'>
                        {isChanneling ? 'Да' : 'Нет'}
                    </TableCell>
                </TableRow>
            }

            {
                cooldown &&
                cooldown.base &&
                cooldown.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Перезарядка
                                    </TableCell>
                    <TableCell align='center'>
                        {cooldown.base}
                    </TableCell>
                    <TableCell align='center'>
                        {cooldown.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(cooldown.base, cooldown.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                cast &&
                cast.base &&
                cast.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Длительность подготовки
                                    </TableCell>
                    <TableCell align='center'>
                        {cast.base}
                    </TableCell>
                    <TableCell align='center'>
                        {cast.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(cast.base, cast.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                duration &&
                duration.base &&
                duration.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Время действия
                                    </TableCell>
                    <TableCell align='center'>
                        {duration.base}
                    </TableCell>
                    <TableCell align='center'>
                        {duration.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(duration.base, duration.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                interval &&
                interval.base &&
                interval.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Интервалы по
                                    </TableCell>
                    <TableCell align='center'>
                        {interval.base}
                    </TableCell>
                    <TableCell align='center'>
                        {interval.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(interval.base, interval.change, level)}
                    </TableCell>
                </TableRow>
            }

            {
                delay &&
                delay.base &&
                delay.change &&
                <TableRow>
                    <TableCell
                        align='left'
                        className='background-grey'
                    >
                        Задержка перед активацией
                                    </TableCell>
                    <TableCell align='center'>
                        {delay.base}
                    </TableCell>
                    <TableCell align='center'>
                        {delay.change}
                    </TableCell>
                    <TableCell align='center'>
                        {calculate(delay.base, delay.change, level)}
                    </TableCell>
                </TableRow>
            }
        </Fragment>
    )

    const costsTable = () => (
        costs.map((cost, costIndex) => (
            <TableRow key={costIndex}>
                <TableCell
                    align='left'
                    className='background-grey'
                >
                    {cost.name}
                </TableCell>
                <TableCell align='center'>
                    {cost.base}
                </TableCell>
                <TableCell align='center'>
                    {cost.change}
                </TableCell>
                <TableCell align='center'>
                    {cost.placeholder.replace('COST', calculate(cost.base, cost.change, level).toString())}
                </TableCell>
            </TableRow>
        ))
    )

    const parametersTable = () => (
        parameters.map((parameter, parameterIndex) => (
            <TableRow key={parameterIndex}>
                <TableCell
                    align='left'
                    className='background-grey'
                >
                    {parameter.name}
                </TableCell>
                <TableCell align='center'>
                    {parameter.base}
                </TableCell>
                <TableCell align='center'>
                    {parameter.change}
                </TableCell>
                <TableCell align='center'>
                    {parameter.placeholder.replace('PARAMETER', calculate(parameter.base, parameter.change, level).toString())}
                </TableCell>
            </TableRow>
        ))
    )

    return (
        <Grid container spacing={3}>
            {
                (distance.base ||
                    radius.base ||
                    angleHorizontal.base ||
                    angleVertical.base ||
                    height.base ||
                    width.base) &&
                <Grid item xs>
                    <Paper>
                        <Table size='small'>
                            {tableHeader()}
                            <TableBody>
                                {areaTable()}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            }

            {
                parameters.length > 0 &&
                <Grid item xs>
                    <Paper>
                        <Table size='small'>
                            {tableHeader()}
                            <TableBody>
                                {parametersTable()}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            }

            {
                costs.length > 0 &&
                <Grid item xs>
                    <Paper>
                        <Table size='small'>
                            {tableHeader()}
                            <TableBody>
                                {costsTable()}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            }

            {
                (isChanneling ||
                    cooldown.base ||
                    cast.base ||
                    duration.base ||
                    interval.base ||
                    delay.base) &&
                <Grid item xs>
                    <Paper>
                        <Table size='small'>
                            {tableHeader()}
                            <TableBody>
                                {timeTable()}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            }
        </Grid >
    );
}

export default SkillParametersView