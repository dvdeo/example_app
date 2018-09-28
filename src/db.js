import PouchDB from 'pouchdb';

export default class DB {
    constructor(name) {
        this.db = new PouchDB(name);
    }

    async getAllNotes() {
        let allNotes = await this.db.allDocs({ include_docs: true });
        let notes = {};

        allNotes.rows.forEach(n => notes[n.id] = n.doc);

        return notes;
    }

    async createNote(note) {
        note.createdAt = new Date().toDateString();
        note.updatedAt = new Date().toDateString();
        if (note.title.length > 20) {
            note.title_list = note.title.substring(1, 20) + "...";
        } else {
            note.title_list = note.title;
        }
        const res = await this.db.post({...note});

        return res;
    }

    //update note
    async updateNote(note, id) {
        note._id = id;
        note.updatedAt = new Date().toDateString();
        if (note.title.length > 20) {
            note.title_list = note.title.substring(1, 20) + "...";
        } else {
            note.title_list = note.title;
        }
        const res = await this.db.put({...note});
        return res;
    }

    //delete note
    async deleteNote(_id, _rev) {
        await this.db.remove({_id, _rev});
    }
}