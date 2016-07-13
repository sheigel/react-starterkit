import * as React from 'react'
import ToDoItem from './ToDoItem'
import Item from './item'

export default ({items}:{items:Item[]}) => (
    <div>
        {items.map(item => <ToDoItem item={item}/>)}
    </div>
)
