const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

require('sinon-mongoose');

const Url = require('./url.model');

// eslint-disable-next-line no-undef
describe('Url Model', () => {
    let UrlMock;

    // eslint-disable-next-line no-undef
    beforeEach(() => {
        UrlMock = sinon.mock(Url);
    });

    // eslint-disable-next-line no-undef
    it("should return all todos", function(done){
        var expectedResult = {status: true, todo: []};
        UrlMock.expects('find').yields(null, expectedResult);
        Url.find(function (err, result) {
            UrlMock.verify();
            UrlMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
});