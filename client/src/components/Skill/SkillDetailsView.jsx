import React from 'react'
import PropTypes from 'prop-types'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core'

const SkillDetailsView = ({
    type,
    actionTypes,
    attributes,
    targetType,
    areaType,
    affectedUnits
}) => {
    const tableHeader = () => (
        <TableHead>
            <TableRow>
                {
                    type &&
                    type != '' &&
                    <TableCell
                        align='center'
                        variant='head'
                        className='table-cell-vertical background-grey'
                    >
                        Тип умения
                    </TableCell>
                }

                {
                    actionTypes &&
                    actionTypes != '' &&
                    <TableCell
                        align='center'
                        variant='head'
                        className='table-cell-vertical background-grey'
                    >
                        Тип действия
                    </TableCell>
                }

                {
                    attributes &&
                    attributes != '' &&
                    <TableCell
                        align='center'
                        variant='head'
                        className='table-cell-vertical background-grey'
                    >
                        Атрибуты
                    </TableCell>
                }

                {
                    affectedUnits &&
                    affectedUnits != '' &&
                    <TableCell
                        align='center'
                        variant='head'
                        className='table-cell-vertical background-grey'
                    >
                        Действует на
                    </TableCell>
                }

                {
                    targetType &&
                    targetType != '' &&
                    <TableCell
                        align='center'
                        variant='head'
                        className='table-cell-vertical background-grey'
                    >
                        Цель
                    </TableCell>
                }

                {
                    areaType &&
                    areaType != '' &&
                    <TableCell
                        align='center'
                        variant='head'
                        className='table-cell-vertical background-grey'
                    >
                        Зона действия
                    </TableCell>
                }
            </TableRow>
        </TableHead>
    )

    const tableBody = () => (
        <TableBody>
            <TableRow>
                {
                    type &&
                    type != '' &&
                    <TableCell
                        align='center'
                        className='table-cell-vertical'
                    >
                        {type}
                    </TableCell>
                }

                {
                    actionTypes &&
                    actionTypes != '' &&
                    <TableCell
                        align='center'
                        className='table-cell-vertical'
                    >
                        {actionTypes}
                    </TableCell>
                }

                {
                    attributes &&
                    attributes != '' &&
                    <TableCell
                        align='center'
                        className='table-cell-vertical'
                    >
                        {attributes}
                    </TableCell>
                }

                {
                    affectedUnits &&
                    affectedUnits != '' &&
                    <TableCell
                        align='center'
                        className='table-cell-vertical'
                    >
                        {affectedUnits}
                    </TableCell>
                }

                {
                    targetType &&
                    targetType != '' &&
                    <TableCell
                        align='center'
                        className='table-cell-vertical'
                    >
                        {targetType}
                    </TableCell>
                }

                {
                    areaType &&
                    areaType != '' &&
                    <TableCell
                        align='center'
                        className='table-cell-vertical'
                    >
                        {areaType}
                    </TableCell>
                }
            </TableRow>
        </TableBody>
    )

    return (
        <TableContainer component={Paper}>
            <Table size='small'>
                {tableHeader()}
                {tableBody()}
            </Table>
        </TableContainer>
    );
}

export default SkillDetailsView