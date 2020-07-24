import React, { Children } from 'react'
import {
    Grid
} from '@material-ui/core'

const SpaceBetweenGrid = ({ children }) => {

    return (
        <Grid
            container
            spacing={0}
            justify='space-between'
            alignItems='center'
        >
            <Grid item>
                <Grid
                    container
                    spacing={0}
                    justify='flex-start'
                    alignItems='center'
                >
                    <Grid item>
                        <Grid
                            container
                            spacing={2}
                            alignItems='center'
                        >
                            {Children.map(children, child =>
                                !!child.props.pulledleft && <Grid item >{child}</Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid
                    container
                    spacing={0}
                    justify='flex-end'
                    alignItems='center'
                >
                    <Grid item>
                        <Grid
                            container
                            spacing={2}
                            alignItems='center'
                        >
                            {Children.map(children, child =>
                                !!child.props.pulledright && <Grid item >{child}</Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default SpaceBetweenGrid