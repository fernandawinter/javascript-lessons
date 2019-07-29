function ToDo(){
    this.tasks = [];
  }

  ToDo.prototype.addTodo= function(item){
    var itemMaiusculo = item.toUpperCase();
    this.tasks.push(itemMaiusculo)
  }
  
  ToDo.prototype.getItems= function(){
    return this.tasks
  }