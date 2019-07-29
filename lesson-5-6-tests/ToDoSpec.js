describe('Testing ToDo.js:', ()=>{
    it('should add an item', ()=>{
      var minhasTarefas = new ToDo();
      var item = 'fazer teste de lógica';
      minhasTarefas.addTodo(item)
      expect(minhasTarefas.getItems().length).toBe(1);
    });

    it('should add two items', ()=>{
      var minhasTarefas = new ToDo();
      var item1 = 'fazer teste de lógica';
      var item2 = 'compra ps4';
      minhasTarefas.addTodo(item1);
      minhasTarefas.addTodo(item2);
      expect(minhasTarefas.getItems().length).toBe(2);
    });

    it('should add buy ps4', ()=>{
      var minhasTarefas = new ToDo();
      var item = 'compra ps4';
      minhasTarefas.addTodo(item);
      expect(minhasTarefas.getItems()[0]).toBe('COMPRA PS4');
    });
  })