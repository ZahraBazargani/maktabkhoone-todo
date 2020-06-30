import React,{Component} from 'react';
import TodoStore from '../stores/TodoStore';
import {observer} from 'mobx-react'

 @observer
class ClearCompleted extends Component{
    onClearCompleted(){
        
        TodoStore.clearCompleted()
    }
    render(){
        return(
                
                <button
                 className='clear-completed'
                 onClick={()=>this.onClearCompleted()}
                 > clear-completed</button>
              
        )
    }
}

export default ClearCompleted