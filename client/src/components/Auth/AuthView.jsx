import React from 'react'
import PropTypes from 'prop-types'
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

const AuthView = ({
    isSignUp,
    isSignIn,
    signUpLink,
    signInLink,
    onChange,
    onSubmit,
    username,
    email,
    password
}) => {
    const classes = useStyles()

    return (
        <Container component='main'
            maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                
                <Typography component='h1' variant='h5'>
                    {isSignIn && 'Sign In'}
                    {isSignUp && 'Sign Up'}
                </Typography>

                <form
                    className={classes.form}
                    noValidate
                    onSubmit={onSubmit}>

                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='off'
                        autoFocus
                        value={email}
                        onChange={e => onChange(e)} />

                    {isSignUp && <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='username'
                        label='Username'
                        name='username'
                        autoComplete='off'
                        autoFocus
                        value={username}
                        onChange={e => onChange(e)} />}

                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='off'
                        value={password}
                        onChange={e => onChange(e)} />

                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label='Remember me' />

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        onClick={e => onSubmit(e)}>
                        {isSignIn && 'Sign In'}
                        {isSignUp && 'Sign Up'}
                    </Button>

                    <Grid container>
                        <Grid item>
                            {isSignIn && <Link href={signUpLink} variant='body2'>
                                Don't have an account? Sign Up
                            </Link>}
                            {isSignUp && <Link href={signInLink} variant='body2'>
                                Have an account? Sign In
                            </Link>}
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

AuthView.propTypes = {
    isSignIn: PropTypes.bool,
    isSignUp: PropTypes.bool,
    signInLink: PropTypes.string,
    signUpLink: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default AuthView