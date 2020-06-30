import React,{Component} from 'react';
import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';
import {observer} from 'mobx-react'
import TodoFooter  from './TodoFooter';

@observer
class TodoItems extends Component{
    check= ()=>{
        if(TodoStore.todos.length !==0)
        return(
            <TodoFooter/>
        )
    }

    viewTodoItem(){
            return(TodoStore.todos.filter(todo=>{
                if(TodoStore.filter===3)
                    return todo.completed
                if (TodoStore.filter===2)
                    return !todo.completed
                else return true
            }))
    }

    render(){
        return(
            <section className="main">
        <ul className="todo-list">
            {
                this.viewTodoItem().map(todo=>{
                    return(
                            <TodoItem todo={todo}/>
                    )
                })
                
            }
            
        </ul>
         {
             this.check()
         }
        
      </section>
        )
        
    }
    

}

export default TodoItems