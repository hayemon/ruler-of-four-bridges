import React, {
    useState
} from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Button,

    Card,
    CardContent,
    CardMedia,

    Divider,
    Grid,
    Paper,
    Slider,

    Table,
    TableBody,
    TableRow,
    TableCell,

    Typography
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { makeStyles } from '@material-ui/core/styles'

import {
    SpaceBetweenGrid,
    TabsContainer
} from '../Layout'
import SkillItemView from './SkillItemView'
import SkillDetailsView from './SkillDetailsView'
import SkillParametersView from './SkillParametersView'

const useStyles = makeStyles((theme) => ({
    sliderLabel: {
        paddingLeft: '16px'
    },
    slider: {
        width: '97%',
        margin: '0 8px'
    }
}))

const SkillView = ({
    isAuthenticated,
    skill,
    onModeChange
}) => {
    const classes = useStyles()

    const [level, setLevel] = useState(1)

    const levelMarks = [
        {
            value: 1,
            label: 1
        },
        ...[...Array(6).keys()].map(
            num => ({
                value: (num + 1) * 50,
                label: (num + 1) * 50
            })
        )
    ]

    const [masteryLevel, setMasteryLevel] = useState(0)

    const masteryLevelMarks = [...Array(11).keys()].map(
        num => ({
            value: num,
            label: num
        })
    )

    const {
        name,
        code,
        description,
        imgUrl,

        type,
        actionTypes,

        targetType,
        singleTarget,
        areaType,
        affectedUnits,
        maximumAffectedUnitsCount,
        areaParameters,

        attributes,
        costs,
        timeParameters,
        parameters
    } = skill

    const sliderHorizontal = (label, valueMarks, value, setValue) => (
        <Paper className='fill-parent'>
            <Grid container spacing={3} justify='center'>
                <Grid
                    item
                    xs={2}
                    container
                    justify='center'
                    alignItems='center'
                >
                    <Box className={classes.sliderLabel}>
                        {`${label} ${value}`}
                    </Box>
                </Grid>

                <Grid item xs={10}>
                    <Box className={classes.slider}>
                        <Slider
                            orientation='horizontal'
                            defaultValue={0}
                            step={1}
                            marks={valueMarks}
                            min={valueMarks[0].value}
                            max={valueMarks[valueMarks.length - 1].value}
                            valueLabelDisplay='auto'
                            onChange={(e, v) => setValue(v)}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
    return (
        <Grid container spacing={3}>
            {skill._id &&
                <Grid item xs={12} container>
                    <SkillItemView
                        _id={skill._id}
                        name={name}
                        imgUrl={imgUrl}
                        code={code}
                        description={description}
                    />
                </Grid>
            }

            {skill._id &&
                <Grid item xs={12} container>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <SkillDetailsView
                                type={type}
                                actionTypes={actionTypes}
                                attributes={attributes}
                                level={level + masteryLevel}
                            />
                        </Grid>

                        <Grid item xs>
                            <SkillDetailsView
                                targetType={targetType}
                                singleTarget={singleTarget}
                                areaType={areaType}
                                affectedUnits={affectedUnits}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            }

            {skill._id &&
                <Grid item xs={12} container>
                    {sliderHorizontal('Уровень', levelMarks, level, setLevel)}
                </Grid>
            }

            {skill._id &&
                <Grid item xs={12} container>
                    {sliderHorizontal('Уровень мастерства', masteryLevelMarks, masteryLevel, setMasteryLevel)}
                </Grid>
            }

            {skill._id &&
                <Grid item xs={12} container>
                    <SkillParametersView
                        level={level + masteryLevel}
                        areaParameters={areaParameters}
                        maximumAffectedUnitsCount={maximumAffectedUnitsCount}
                        timeParameters={timeParameters}
                        costs={costs}
                        parameters={parameters}
                    />
                </Grid>
            }

            {isAuthenticated &&
                <Grid item xs={12}>
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
                </Grid>
            }
        </Grid>
    );
}

SkillView.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    skill: PropTypes.object.isRequired,
    onModeChange: PropTypes.func.isRequired
}

export default SkillView