import GitHub from './github'
import FetchMock from 'fetch-mock';

describe("GitHub", () => {
    let gitHub;
    beforeEach(() => {
        gitHub = new GitHub();
        gitHub.query = 'the-query';
        FetchMock.catch(503);
    });
    afterEach(() => FetchMock.restore());
    it("succeeds", () => {
        const response = {
            items: ['a', 'b']
        };
        FetchMock.get('https://api.github.com/search/repositories?q=the-query', response);
        return gitHub.search()
            .then(() => {
                expect(gitHub.results.slice()).toEqual(['a', 'b']);
            })
    });
    it("fails", () => {
        FetchMock.get('https://api.github.com/search/repositories?q=the-query', {status: 500});
        return gitHub.search()
            .then(() => {
                expect('').toEqual("shouldn't get here, but we got here");
            })
            .catch((error) => {
                expect(error).toEqual('500:Internal Server Error');
            });
    });
    it("has error", () => {
        FetchMock.get('https://api.github.com/search/repositories?q=the-query', {throws: 'some error'});
        return gitHub.search()
            .then(() => {
                expect('').toEqual("shouldn't get here, but we got here");
            })
            .catch((error) => {
                expect(error).toEqual('some error');
            });
    });

});