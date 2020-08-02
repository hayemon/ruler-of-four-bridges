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

import goldTexture from '../../../public/gold-texture.png'
import logoImg from '../../../public/the-island-logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(3)
    },
    logo: {
        height: '50px',
        width: '214px',
        maxHeight: '50px',
        background: `url(${goldTexture})`,
        backgroundSize: 'cover',
        mask: `url(${logoImg})`,
        WebkitMask: `url(${logoImg})`,
        WebkitMaskSize: 'auto 50px'
    }
}))


const NavBar = ({ landing, isAuthenticated, signout }) => {
    const classes = useStyles(!!landing)

    return (
        <div className={classes.root}>
            <AppBar
                elevation={landing ? 0 : 3}
                position='static'
                className={landing ? 'landing-navbar' : 'background-rock-black'}
            >
                <Toolbar>
                    <SpaceBetweenGrid>
                        <IconButton
                            pulledleft='true'
                            edge='start'
                            color='inherit'
                            href='/'
                        >
                            <div className={classes.logo}></div>
                        </IconButton>

                        <Button
                            pulledright='true'
                            href='/characterProfiles/'
                            className='text-gold'
                        >
                            Персонажи
                        </Button>

                        <Button
                            pulledright='true'
                            href='/skills/'
                            className='text-gold'
                        >
                            Умения
                        </Button>

                        {isAuthenticated && <Button
                            pulledright='true'
                            color='inherit'
                            href='/configuration/'
                        >
                            Конфигурация
                        </Button>}

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
