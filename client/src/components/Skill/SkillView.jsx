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
    sliderBlock: {
        position: 'fixed !important',
        height: '80vh !important',
        bottom: '2.5vh !important',
        right: '16px !important'
    },
    slider: {
        height: '84%',
        margin: '0 8px'
    },
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
        ),
        {
            value: 310,
            label: 310
        }
    ]

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

    return (
        <Grid container spacing={3}>

            <div className={classes.sliderBlock}>
                <Paper className='fill-parent'>
                    <Box className='basic-padding'>
                        Ур. {level}
                    </Box>
                    <Box className={classes.slider}>
                        <Slider
                            orientation='vertical'
                            defaultValue={1}
                            step={1}
                            marks={levelMarks}
                            min={levelMarks[0].value}
                            max={levelMarks[levelMarks.length - 1].value}
                            valueLabelDisplay='auto'
                            onChange={(e, v) => setLevel(v)}
                        />
                    </Box>
                </Paper>
            </div>

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
                    <SkillDetailsView
                        type={type}
                        actionTypes={actionTypes}
                        attributes={attributes}
                        targetType={targetType}
                        areaType={areaType}
                        affectedUnits={affectedUnits}
                    />
                </Grid>
            }

            {skill._id &&
                <Grid item xs={12} container>
                    <SkillParametersView
                        level={level}
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