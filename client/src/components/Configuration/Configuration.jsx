import React from 'react'
import {
    Container
} from '@material-ui/core'

import { TabsContainer } from '../Layout'
import ParameterModels from './ParameterModels'
import Dictionaries from './Dictionaries'

const Configuration = () => {

    return (
        <Container maxWidth='md' className='root'>
            <TabsContainer>
                <ParameterModels tablabel='Параметры' />
                <Dictionaries tablabel='Справочники' />
            </TabsContainer>
        </Container>
    )
}

export default Configuration
