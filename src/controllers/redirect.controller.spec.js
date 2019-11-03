const sinon = require('sinon');
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const spy = chai.spy;
const expect = chai.expect;

require('sinon-mongoose');

const Url = require('../models/url.model');
const RedirectController = require('../controllers/redirect.controller');

// eslint-disable-next-line no-undef
describe('Redirect Controller', () => {
    // eslint-disable-next-line no-undef
    it("should redirect to full url when found", () => {
        const req = { params: { url: 'example' } };
        const res = { redirect: () => { }, status: (code) => { return { send: () => { return code; } }; } };

        sinon.stub(Url, 'findOne').callsFake(() => {
            return { fullUrl: 'www.example.com' };
        });

        spy.on(res, 'redirect');
        RedirectController.redirect(req, res);

        sinon.assert.calledOnce(Url.findOne);
        expect(res.redirect).to.have.been.called.with('www.example.com');
    });
});