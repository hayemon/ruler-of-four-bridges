import React, {
    useState
} from 'react'
import PropTypes from 'prop-types'
import {
    useForm,
    useFieldArray,
    Controller
} from 'react-hook-form'
import {
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    Add as AddIcon,
    Remove as RemoveIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'
import {
    CancelSubmitToolbar
} from '../Controls'
import { DictionaryInput } from '../Controls'
import SkillParameterForm from './SkillParameterForm'
import SkillParameterExtendedForm from './SkillParameterExtendedForm'

const useStyles = makeStyles((theme) => ({
}))

const SkillForm = ({
    skill,
    dictionaries,
    parameterModels,
    onModeChange,
    onSubmit
}) => {
    const classes = useStyles()

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
        attributes,
        cost,
        parameters
    } = skill

    const areaParameters = skill.areaParameters || {}
    const timeParameters = skill.timeParameters || {}

    const typesDictionary = dictionaries.find(x => x.code == 'SKILL_TYPES')
    const actionTypesDictionary = dictionaries.find(x => x.code == 'SKILL_ACTION_TYPES')
    const targetTypesDictionary = dictionaries.find(x => x.code == 'SKILL_TARGET_TYPES')
    const areaTypesDictionary = dictionaries.find(x => x.code == 'SKILL_AREA_TYPES')
    const affectedUnitsDictionary = dictionaries.find(x => x.code == 'SKILL_AFFECTED_UNITS')
    const attributesDictionary = dictionaries.find(x => x.code == 'ATTRIBUTES')

    const {
        register,
        control,
        handleSubmit,
        setValue
    } = useForm({
        defaultValues: {
            ...skill
        }
    })

    const costFields = useFieldArray({
        control,
        name: 'costs'
    })

    const onCostFieldAppend = () => {
        costFields.append({})
    }

    const parameterFields = useFieldArray({
        control,
        name: 'parameters'
    })

    const onParameterFieldAppend = () => {
        parameterFields.append({})
    }

    return (
        <Container maxWidth='md' className='root'>
            <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit(formData => {
                    console.log(formData)
                    {/* onSubmit({
                        ...skill,
                        ...formData
                    })
                    onModeChange() */}
                })}>

                <Grid
                    container
                    spacing={3}
                    direction='column'
                >
                    <Grid item>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='standard'
                                        margin='normal'
                                        fullWidth
                                        id='name'
                                        label='Название'
                                        name='name'
                                        autoComplete='off'
                                        defaultValue={name}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='standard'
                                        margin='normal'
                                        fullWidth
                                        id='code'
                                        label='Код'
                                        name='code'
                                        autoComplete='off'
                                        defaultValue={code}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='standard'
                                        margin='normal'
                                        fullWidth
                                        id='imgUrl'
                                        label='Ссылка на изображение'
                                        name='imgUrl'
                                        autoComplete='off'
                                        defaultValue={imgUrl}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <TextField
                                inputRef={register()}
                                variant='standard'
                                margin='normal'
                                fullWidth
                                id='description'
                                label='Описание'
                                name='description'
                                autoComplete='off'
                                multiline
                                defaultValue={description}
                            />
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <DictionaryInput
                                fieldName='type'
                                fieldLabel={typesDictionary.nameSingle}
                                defaultValue={type}
                                modelFieldDisplay='value'
                                register={register}
                                setValue={setValue}
                                dictionary={typesDictionary}
                            />
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <DictionaryInput
                                fieldName='actionTypes'
                                fieldLabel={actionTypesDictionary.nameSingle}
                                defaultValue={actionTypes}
                                modelFieldDisplay='value'
                                register={register}
                                setValue={setValue}
                                dictionary={actionTypesDictionary}
                            />
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <DictionaryInput
                                fieldName='targetType'
                                fieldLabel={targetTypesDictionary.nameSingle}
                                defaultValue={targetType}
                                modelFieldDisplay='value'
                                register={register}
                                setValue={setValue}
                                dictionary={targetTypesDictionary}
                            />
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <Grid
                                container
                                spacing={3}
                                justify='center'
                            >
                                <Grid item xs={12}>
                                    <DictionaryInput
                                        fieldName='areaType'
                                        fieldLabel={areaTypesDictionary.nameSingle}
                                        defaultValue={areaType}
                                        modelFieldDisplay='value'
                                        register={register}
                                        setValue={setValue}
                                        dictionary={areaTypesDictionary}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={areaParameters.distance}
                                        fieldName='areaParameters.distance'
                                        fieldLabel='Дальность применения'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={areaParameters.radius}
                                        fieldName='areaParameters.radius'
                                        fieldLabel='Радиус действия'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={areaParameters.angleHorizontal}
                                        fieldName='areaParameters.angleHorizontal'
                                        fieldLabel='Охват по горизонтали (градусы)'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={areaParameters.angleVertical}
                                        fieldName='areaParameters.angleVertical'
                                        fieldLabel='Охват по вертикали (градусы)'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={areaParameters.width}
                                        fieldName='areaParameters.width'
                                        fieldLabel='Ширина охвата (метры)'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={areaParameters.height}
                                        fieldName='areaParameters.height'
                                        fieldLabel='Высота охвата (метры)'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={maximumAffectedUnitsCount}
                                        fieldName='maximumAffectedUnitsCount'
                                        fieldLabel='Максимальное количество целей'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <DictionaryInput
                                fieldName='affectedUnits'
                                fieldLabel={affectedUnitsDictionary.nameSingle}
                                defaultValue={affectedUnits}
                                modelFieldDisplay='value'
                                register={register}
                                setValue={setValue}
                                dictionary={affectedUnitsDictionary}
                            />
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <DictionaryInput
                                fieldName='attributes'
                                fieldLabel='Тип урона'
                                defaultValue={attributes}
                                modelFieldDisplay='value'
                                register={register}
                                setValue={setValue}
                                dictionary={attributesDictionary}
                            />
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label='Продолжительное'
                                        name='timeParameters.isChanneling'
                                        defaultValue={timeParameters.isChanneling}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={timeParameters.cooldown}
                                        fieldName='timeParameters.cooldown'
                                        fieldLabel='Перезарядка'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={timeParameters.cast}
                                        fieldName='timeParameters.cast'
                                        fieldLabel='Длительность подготовки'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={timeParameters.duration}
                                        fieldName='timeParameters.duration'
                                        fieldLabel='Время действия'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={timeParameters.interval}
                                        fieldName='timeParameters.interval'
                                        fieldLabel='Интервалы по'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <SkillParameterForm
                                        field={timeParameters.delay}
                                        fieldName='timeParameters.delay'
                                        fieldLabel='Задержка перед активацией'
                                        register={register}
                                        control={control}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <Grid
                                container
                                spacing={3}
                                direction='column'
                            >
                                <Grid item>
                                    <Typography variant='h6'>
                                        Расходы
                                    </Typography>
                                </Grid>

                                {costFields.fields.map((cost, costIndex) => (
                                    <Grid item key={costIndex}>
                                        <SkillParameterExtendedForm
                                            field={cost}
                                            fieldName={`costs[${costIndex}]`}
                                            register={register}
                                            control={control}
                                            parameterModels={parameterModels}
                                        />
                                    </Grid>
                                ))}

                                <Grid item>
                                    <SpaceBetweenGrid>
                                        <IconButton
                                            pulledright='true'
                                            edge='start'
                                            variant='contained'
                                            color='primary'
                                            onClick={onCostFieldAppend}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </SpaceBetweenGrid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className='basic-padding'>
                            <Grid
                                container
                                spacing={3}
                                direction='column'
                                justify='center'
                            >
                                <Grid item>
                                    <Typography variant='h6'>
                                        Параметры
                                    </Typography>
                                </Grid>

                                {parameterFields.fields.map((parameter, parameterIndex) => (
                                    <Grid item key={parameterIndex}>
                                        <SkillParameterExtendedForm
                                            field={parameter}
                                            fieldName={`parameters[${parameterIndex}]`}
                                            register={register}
                                            control={control}
                                            parameterModels={parameterModels}
                                        />
                                    </Grid>
                                ))}

                                <Grid item>
                                    <SpaceBetweenGrid>
                                        <IconButton
                                            pulledright='true'
                                            edge='start'
                                            variant='contained'
                                            color='primary'
                                            onClick={onParameterFieldAppend}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </SpaceBetweenGrid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <CancelSubmitToolbar
                            onSubmit={() => { }}
                            onCancel={onModeChange}
                        />
                    </Grid>
                </Grid>
            </form>
        </Container >
    );
}

SkillForm.propTypes = {
    skill: PropTypes.object.isRequired,
    dictionaries: PropTypes.array.isRequired,
    onModeChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default SkillForm