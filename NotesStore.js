'use strict'

class NotesStore {

    notes = []

    addNote(state, name) {
        if (!name) {
            throw new Error('Name cannot be empty')
        }
    }
    getNotes(state) {

    }

}