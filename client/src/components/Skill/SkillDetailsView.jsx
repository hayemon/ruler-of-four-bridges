import React from 'react'
import PropTypes from 'prop-types'
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from '@material-ui/core'

const SkillDetailsView = ({
    type,
    actionTypes,
    attributes,
    level,

    targetType,
    singleTarget,
    areaType,
    affectedUnits
}) => {
    return (
        <TableContainer component={Paper}>
            <Table size='small'>
                <TableBody>
                    {type &&
                        <TableRow>
                            <TableCell
                                align='left'
                                className='background-grey'
                            >
                                Тип умения
                        </TableCell>
                            <TableCell align='center'>
                                {type}
                            </TableCell>
                        </TableRow>
                    }

                    {actionTypes &&
                        <TableRow>
                            <TableCell
                                align='left'
                                className='background-grey'
                            >
                                Тип действия
                        </TableCell>
                            <TableCell align='center'>
                                {actionTypes}
                            </TableCell>
                        </TableRow>
                    }

                    {attributes &&
                        <TableRow>
                            <TableCell
                                align='left'
                                className='background-grey'
                            >
                                Атрибуты
                        </TableCell>
                            <TableCell align='center'>
                                {attributes}
                            </TableCell>
                        </TableRow>
                    }

                    {level &&
                        <TableRow>
                            <TableCell
                                align='left'
                                className='background-grey'
                            >
                                Уровень
                        </TableCell>
                            <TableCell align='center'>
                                {level}
                            </TableCell>
                        </TableRow>
                    }

                    {affectedUnits &&
                        <TableRow>
                            <TableCell
                                align='left'
                                className='background-grey'
                            >
                                Действует на
                        </TableCell>
                            <TableCell align='center'>
                                {affectedUnits}
                            </TableCell>
                        </TableRow>
                    }

                    {targetType &&
                        <TableRow>
                            <TableCell
                                align='left'
                                className='background-grey'
                            >
                                Цель
                        </TableCell>
                            <TableCell align='center'>
                                {targetType}
                            </TableCell>
                        </TableRow>
                    }

                    {singleTarget != null && singleTarget != undefined &&
                        <TableRow>
                            <TableCell
                                align='left'
                                className='background-grey'
                            >
                                Одиночная цель
                                                </TableCell>
                            <TableCell align='center'>
                                {singleTarget ? 'Да' : 'Нет'}
                            </TableCell>
                        </TableRow>
                    }

                    {areaType &&
                        <TableRow>
                            <TableCell
                                align='left'
                                className='background-grey'
                            >
                                Зона действия
                        </TableCell>
                            <TableCell align='center'>
                                {singleTarget ? 'Неприменимо' : areaType}
                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SkillDetailsView