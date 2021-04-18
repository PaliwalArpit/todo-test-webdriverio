const {Given, When, Then, AfterAll, After} = require('cucumber');
const assert = require('assert').strict
const restHelper = require('./../util/restHelper');

When('I send GET request to {}', async function (path) {
    const response = await restHelper.getData(`https://todomvc.com/examples/react/#/`);
    this.context['response'] = response;
});

Then("I get response code {int}", async function (expectedResponse) {
    assert.equal(this.context['response'].status, code);
});


/**
 I was not able to find put and delete request for todo api
 -------------------------------------------------------------
 Here i have written feature file but as payload is not available i did not wrote step defination for it
*/
