import {extendObservable, runInAction} from 'mobx';
import crayola from '../resources/crayola.json'

export default class Colors {
    constructor() {
        extendObservable(this, {
            results: [],
            query: ''
        });
    }

    search() {
        runInAction(() => {
            this.results = crayola.filter(color => color.name.toLowerCase().includes(this.query.toLowerCase()));
        });
    }

    updateQuery(value) {
        runInAction(() => this.query = value);
    }
}