describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8000/#/menu/dashboard');


    element(by.id('title-home')).getText().then(function (text) {
      console.log(text);
    });

    /*
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
    */


  });
});