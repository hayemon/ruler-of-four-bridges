import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

import { signout } from '../../actions/auth'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(2)
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const NavBar = ({ isAuthenticated, signout }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant='h6' className={classes.title}>
                        Владыка Четырех Мостов
                    </Typography>

                    <Button color='inherit'
                        href='/characterProfiles/'>
                        Персонажи
                    </Button>

                    <Button color='inherit'
                        href='/parameterModels/'>
                        Конфигурация
                    </Button>

                    {isAuthenticated ?
                        <Button onClick={e => signout()} color='inherit'>
                            Выйти
                      </Button> :
                        <Button href='/signin'
                            color='inherit'>
                            Войти
                          </Button>}
                </Toolbar>
            </AppBar>
        </div >
    )
}

NavBar.propTypes = {
    signout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(
    mapStateToProps,
    { signout }
)(NavBar)
