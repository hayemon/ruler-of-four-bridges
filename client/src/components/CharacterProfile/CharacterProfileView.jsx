import React, {
    useState
} from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import {
    useSpring,
    animated
} from 'react-spring'
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
import Stats from '../Stats'
import { SkillsView } from '../Skill'

const useStyles = makeStyles((theme) => ({
    sliderBlock: {
        position: 'fixed !important',
        height: '90vh !important',
        bottom: '7.5vh !important',
        right: '16px !important'
    },
    slider: {
        height: '88%',
        margin: '0 8px'
    },
    section: {
        marginTop: theme.spacing(3)
    }
}))

const CharacterProfileView = ({
    isAuthenticated,
    characterProfile,
    characterSkills,
    dictionaries,
    onModeChange
}) => {
    const classes = useStyles()

    const parameterCategories = dictionaries.find(x => x.code == 'PARAMETER_CATEGORIES')

    const [isTopPartVisible, setIsTopPartVisible] = useState(true)

    const [level, setLevel] = useState(1)

    const spring = useSpring({
        opacity: !isTopPartVisible ? 1 : 0,
        transform: !isTopPartVisible ? 'translateX(0px)' : 'translateX(100%)',
        from: {
            opacity: isTopPartVisible ? 1 : 0,
            transform: isTopPartVisible ? 'translateX(0px)' : 'translateX(100%)'
        }
    })

    const marks = [
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
    return (
        <Container maxWidth='md' className='root'>
            <Grid container spacing={3}>
                <animated.div
                    style={spring}
                    className={classes.sliderBlock}
                >
                    <Paper className='fill-parent'>
                        <Box className='basic-padding'>
                            Ур. {level}
                        </Box>
                        <Box className={classes.slider}>
                            <Slider
                                orientation='vertical'
                                defaultValue={1}
                                step={1}
                                marks={marks}
                                min={marks[0].value}
                                max={marks[marks.length - 1].value}
                                valueLabelDisplay='auto'
                                onChange={(e, v) => setLevel(v)}
                            />
                        </Box>
                    </Paper>
                </animated.div>

                {characterProfile._id &&
                    <Grid item xs={12}>
                        <VisibilitySensor
                            partialVisibility
                            onChange={isVisible => setIsTopPartVisible(isVisible)}
                        >
                            <Grid container spacing={3} alignItems='stretch'>
                                <Grid item xs={4}>
                                    <Card>
                                        <CardMedia
                                            component='img'
                                            alt={characterProfile.name}
                                            image={characterProfile.imgUrl}
                                            title={characterProfile.name}
                                        />
                                    </Card>
                                </Grid>

                                <Grid item xs={8} container>
                                    <Paper className='fill-parent overflow-hidden'>
                                        <Box display='flex' className='fill-parent'>
                                            <Grid
                                                container
                                                spacing={3}
                                                direction='column'
                                                justify='space-between'
                                            >
                                                <Grid item>
                                                    <Box className='basic-margin'>
                                                        <Typography
                                                            variant='h5'>
                                                            {characterProfile.name}
                                                        </Typography>
                                                    </Box>
                                                    <Divider variant='middle' />
                                                </Grid>

                                                <Grid item>
                                                    <Box className='basic-margin'>
                                                        <Typography
                                                            variant='body2'
                                                            component='p'
                                                            color='textSecondary'
                                                            className='text-display-new-lines'
                                                        >
                                                            {characterProfile.description}
                                                        </Typography>
                                                    </Box>
                                                </Grid>

                                                <Grid item>
                                                    <Divider variant='fullWidth' />
                                                    <Table>
                                                        <TableBody>
                                                            <TableRow className={classes.tableRow}>
                                                                <TableCell className='small-padding background-grey'>
                                                                    Настоящее имя
                                                                </TableCell>
                                                                <TableCell className='small-padding'>
                                                                    {characterProfile.realName}
                                                                </TableCell>
                                                            </TableRow>
                                                            {
                                                                characterProfile.details
                                                                    .map((detail, index) =>
                                                                        <TableRow key={index} className={classes.tableRow}>
                                                                            <TableCell className='small-padding background-grey'>
                                                                                {detail.key}
                                                                            </TableCell>
                                                                            <TableCell className='small-padding'>
                                                                                {detail.value}
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    )
                                                            }
                                                        </TableBody>
                                                    </Table>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </VisibilitySensor>
                    </Grid>
                }

                {characterProfile._id &&
                    <Grid item xs={12}>
                        <TabsContainer>
                            <div tablabel='Параметры'>
                                {parameterCategories &&
                                    parameterCategories.models
                                        .map((parameterCategory, parameterCategoryIndex) =>
                                            <Stats
                                                key={parameterCategoryIndex}
                                                className='nullify'
                                                category={parameterCategory}
                                                stats={characterProfile.stats.filter(x => x.category == parameterCategory.key)}
                                                level={level}
                                            />
                                        )
                                }
                            </div>

                            <div tablabel='Умения'>
                                <Box className={classes.section}>
                                    {
                                        characterSkills && <SkillsView
                                            isAuthenticated={isAuthenticated}
                                            skills={characterSkills}
                                        />
                                    }
                                </Box>
                            </div>
                        </TabsContainer>
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
        </Container>
    );
}

CharacterProfileView.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    characterProfile: PropTypes.object.isRequired,
    dictionaries: PropTypes.array.isRequired,
    onModeChange: PropTypes.func.isRequired
}

export default CharacterProfileView