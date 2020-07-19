import React from 'react'
import {
    Container
} from '@material-ui/core'

import { TabsContainer } from '../Layout'
import ParameterModels from './ParameterModels'

const Configuration = () => {

    return (
        <Container maxWidth='md' className='root'>
            <TabsContainer>
                <ParameterModels tablabel='Параметры' />
            </TabsContainer>
        </Container>
    )
}

export default Configuration
