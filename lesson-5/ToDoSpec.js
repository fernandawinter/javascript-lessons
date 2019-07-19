describe('Testing the functionality, this is the checklist', ()=>{
    it('should add an item', ()=>{
      var todo = new ToDo();
      var item = {
       title: "get milk",
       complete: false
     }
      var done = todo.addTodo(item)
      todo.addTodo("Fernanda");
      expect(todo.getItems().length).toBe(1);
    })
  })