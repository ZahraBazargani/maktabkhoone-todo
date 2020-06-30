import {observable,action} from 'mobx';
import TodoModel from './TodoModel' 


class TodoStore{
    @observable  todos=[
    ]
    @observable uncompletedCount=0

    //ALL=1 , ACTIVE=2 , COMPLETED=3   
    @observable filter=1
    lastID=0
    

    @action
    addTodo(title){
            this.todos.push(new TodoModel(this,title,false,this.lastID ++) )
            
    }

    @action
    clearCompleted(){
        this.todos=this.todos.filter(todo=>!todo.completed)
    }
}

const store=new TodoStore
export default store