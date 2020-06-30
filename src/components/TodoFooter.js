import React,{Component} from 'react';
import TodoStore from '../stores/TodoStore';
import ClearCompleted from './ClearCompleted';
import FilterButtons from './FilterButtons';
import {observer} from 'mobx-react'

 @observer
class TodoFooter extends Component{

    render(){
        return(
           <section  className='footer'>
               <div className="todo-count">
                   { TodoStore.uncompletedCount}
                   &ensp;items left
               </div>

               <div >
                    <FilterButtons/>
                    <ClearCompleted/>
               </div>

           </section>
        )
    }
}

export default TodoFooter