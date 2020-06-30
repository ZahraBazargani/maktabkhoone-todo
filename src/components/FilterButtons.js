import React,{Component} from 'react';
import TodoStore from '../stores/TodoStore';
import {observer} from 'mobx-react'

 @observer
 class FilterButtons extends Component{
    
    setFilterALL(){
        TodoStore.filter=1
    }

    setFilterActive(){
        TodoStore.filter=2
    }

    setFilterCompleted(){
        TodoStore.filter=3
    }

    render(){
        
        return(
                    <div className='filters ' >
                    <button 
                    style={{backgroundColor:TodoStore.filter===1 ? 'lightskyblue' : ''}}
                    onClick={()=>this.setFilterALL()}>
                        All
                        </button>
                    &ensp;
                    <button 
                    style={{backgroundColor:TodoStore.filter===2 ? 'lightskyblue' : ''}}
                    onClick={()=>this.setFilterActive()} >
                        Active
                        </button>
                    &ensp;
                    <button 
                    style={{backgroundColor:TodoStore.filter===3 ? 'lightskyblue' : ''}}
                    onClick={()=>this.setFilterCompleted()}>
                        Completed
                        </button>
                    &ensp;
                    </div>
                    
               
        )
    }
}

export default FilterButtons