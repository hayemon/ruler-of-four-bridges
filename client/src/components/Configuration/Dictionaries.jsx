import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    addDictionary,
    getDictionaries,
    updateDictionary,
    deleteDictionary
} from '../../actions/dictionary'
import DictionariesForm from './DictionariesForm'

const Dictionaries = ({
    addDictionary,
    getDictionaries,
    updateDictionary,
    deleteDictionary,
    dictionary: {
        dictionaries,
        loading
    }
}) => {
    useEffect(() => {
        getDictionaries()
    }, [getDictionaries])

    const [dictionaryToEdit, setDictionaryToEdit] = useState(null)

    const onOpenDictionaryForm = dictionaryToEdit => {
        setDictionaryToEdit(dictionaryToEdit)
    }

    const onSubmitDictionaryModels = models => {
        updateDictionary({
            ...dictionaryToEdit,
            models: models
        })        
        setDictionaryToEdit(null)
    }

    const onSubmit = data => {
        const dictionariesToDelete = dictionaries.filter(dictionary => {
            if (!data ||
                !data.dictionaries ||
                data.dictionaries.length == 0 ||
                !data.dictionaries.find(x => x._id == dictionary._id))
                return dictionary
            else
                return
        })

        dictionariesToDelete.forEach(dictionary =>
            deleteDictionary(dictionary._id)
        )

        data.dictionaries.forEach(dictionary => {
            if (dictionary._id) {
                updateDictionary(dictionary)
            } else {
                addDictionary(dictionary)
            }
        })
    }

    return !loading ?
        <DictionariesForm
            dictionaries={dictionaries}
            dictionaryToEdit={dictionaryToEdit}
            onOpenDictionaryForm={onOpenDictionaryForm}
            onSubmitDictionaryModels={onSubmitDictionaryModels}
            onSubmit={onSubmit}
        /> : <div></div>
}

Dictionaries.propTypes = {
    addDictionary: PropTypes.func.isRequired,
    getDictionaries: PropTypes.func.isRequired,
    updateDictionary: PropTypes.func.isRequired,
    deleteDictionary: PropTypes.func.isRequired,
    dictionary: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    dictionary: state.dictionary
})

export default connect(
    mapStateToProps,
    {
        addDictionary,
        getDictionaries,
        updateDictionary,
        deleteDictionary
    }
)(Dictionaries)