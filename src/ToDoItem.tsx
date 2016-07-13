import * as React from 'react'
import Item from './item'

export default ({item}:{item:Item}) => (
    <div>
        <input type="checkbox"/>
        <span>{item.text}</span>
    </div>
)
