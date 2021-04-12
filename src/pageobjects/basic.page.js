/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class BasicPage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    get todosLabel() { return $('//h1[text()="todos"]');}
    get todosField() { return $('.new-todo');}
    get todosList() { return $('.todo-list');}
    get editTodo() { return $('.view');}
    get itemCount() { return $('//strong[@data-reactid=".0.2.0.0"]');}
    get firstTodo() { return $('input.toggle:first-of-type');}
    get completedTodo() { return $('li.completed');}
    get destroyTodo() { return $('button.destroy:first-of-type');}
    get allTodos() { return $$('//div[@class="view"]//button[@class="destroy"]')}
    get allTodoFilter() { return $('//a[text()="All"]');}
    get activeFilter() { return $('//a[text()="Active"]')}
    get completedFilter() { return $('//a[text()="Completed"]');}
    get allTodosList() { return $$('input.toggle');}
    get completedTodos() { return $$('li.completed');}

    open() {
        return browser.url(`https://todomvc.com/examples/react/#/`);
    }
    verifyTodosLabel(){
        this.todosLabel.waitForDisplayed({ timeout:3000 })
        return this.todosLabel.isDisplayed();
    }
    verifyTodosField(){
        return this.todosField.isDisplayed();
    }

    addTodos(name){
        this.todosField.setValue(name);
        this.todosField.setValue('\uE007');
        return this.todosList.isDisplayed();
    }

    editTodos(){
        this.editTodo.doubleClick();
        this.todosField.setValue("test editing");
        const editedValue = this.todosField.getValue();
        return editedValue;
    }  

    
    strikeOutTodos(){
        //this.allTodoFilter.click();
        this.addTodos("test2");
        const count = this.itemCount.getText();
        if(count == 2){
            this.firstTodo.click();
            this.completedTodo.waitForDisplayed({ timeout:3000 })
            const countUpdated = this.itemCount.getText();
            if(countUpdated == 1){
                return this.completedTodo.isDisplayed();
            }
        }
    }

    deleteTodos(){
        this.allTodoFilter.click();
        var todos = this.allTodos;
        todos.forEach(()=>{
            browser.pause(1000);
            var runInBrowser = function (argument) {
                argument.click();
              };
              var elementToClickOn = browser.$(
                '//div[@class="view"]//button[@class="destroy"]'
              );
              browser.execute(runInBrowser, elementToClickOn);
            //items.click();
        });
        return this.todosList.isDisplayed();
    }

    checkFilterTodos(){
        this.completedFilter.click();
        const completedTodoslen = this.completedTodos.length;
        console.log("==========="+completedTodoslen);
        if(completedTodoslen != 0){
            return true;
        }
    }
}

module.exports = new BasicPage();

