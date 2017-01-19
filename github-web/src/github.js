import {extendObservable, runInAction} from 'mobx';
import qs from 'qs';

export default class GitHub {
    constructor() {
        extendObservable(this, {
            results: [],
            query: ''
        });
    }

    search() {
        const self = this;
        return new Promise((resolve, reject) => {
            const encodedQuery = qs.stringify({q: this.query});

            fetch(`https://api.github.com/search/repositories?${encodedQuery}`)
                .then((response) => {
                    if (response.ok)
                        return response.json();
                    else reject(`${response.status}:${response.statusText}`);
                })
                .then((json) => {
                    runInAction(() => {
                        self.results = json.items;
                        resolve();
                    });
                })
                .catch((error) => {
                    runInAction(() => {
                        self.results = [];
                        reject(error);
                    });
                });
        });
    }

    updateQuery(value) {
        runInAction(() => this.query = value);
    }
}