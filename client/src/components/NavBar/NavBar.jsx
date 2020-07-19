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
import { SpaceBetweenGrid } from '../Layout'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(3)
    },
    menuButton: {
        margin: 0,
        padding: 0
    },
}))


const NavBar = ({ isAuthenticated, signout }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <SpaceBetweenGrid>
                        <IconButton
                            pulledleft='true'
                            edge='start'
                            className={classes.menuButton}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            pulledleft='true'
                            variant='h6'
                        >
                            Владыка Четырех Мостов
                        </Typography>

                        <Button
                            pulledright='true'
                            color='inherit'
                            href='/characterProfiles/'
                        >
                            Персонажи
                        </Button>

                        <Button
                            pulledright='true'
                            color='inherit'
                            href='/configuration/'
                        >
                            Конфигурация
                        </Button>

                        {isAuthenticated ?
                            <Button
                                pulledright='true'
                                onClick={e => signout()}
                                color='inherit'
                            >
                                Выйти
                            </Button> :
                            <Button
                                pulledright='true'
                                href='/signin'
                                color='inherit'
                            >
                                Войти
                            </Button>
                        }
                    </SpaceBetweenGrid>
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
