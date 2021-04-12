const BasicTest = require('../pageobjects/basic.page.js');
const assert = require('assert');

describe('React todo app test', () => {
    it('should have the right title', () => {
        browser.url('./');
        browser.maximizeWindow();
        expect(browser).toHaveTitle('React • TodoMVC');
    });

    // Verify the app is opening 
   it('todo app should open',()=>{
       assert.strictEqual(BasicTest.verifyTodosLabel(), true, "Todo label is present");
   });

   // Verify todo field is displayed on app
   it('Should show todos field on application',()=>{
       assert.strictEqual(BasicTest.verifyTodosField(), true, "Todos field should be displayed");
   });

   // Verify todos are getting added
   it("User should be able to add todos",()=>{
        assert.strictEqual(BasicTest.addTodos("test"),true, "User should be able to add todos");
   });

   // Verify todos are editable
   it("User should be able to edit todos",()=>{
        assert.strictEqual(BasicTest.editTodos(), "test editing", "Edited value should be same");
   });
    // Verify todos are striked out
    it("User should be able to strike out todos",()=>{
        assert.strictEqual(BasicTest.strikeOutTodos(), true,"Strike through should work" );
   });
    // Verify user is able to apply filters
    it("User should be able to filter todos",()=>{
        assert.strictEqual(BasicTest.checkFilterTodos(), true, "Filter data should be correct");
    });
    // Verify user is able to delete all the todos for next test to start
   it("User should be able to cross (delete) todos",()=>{
        assert.strictEqual(BasicTest.deleteTodos(), false, "Delete todos is not successfull");
   });
});