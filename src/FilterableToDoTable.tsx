import * as React from 'react'
import AddToDoItem from './AddToDoItem'
import SearchBar from './SearchBar'
import ToDoTable from './ToDoTable'
import Item from "./item";

interface FilterableToDoTableState {
    searchFilter:string
    toDoItems:Item[]
}

const initialState: FilterableToDoTableState = {
    searchFilter: '1',
    toDoItems: [
        new Item('item 1'),
        new Item('item 11'),
        new Item('item 2')
    ]
}

export default class FilterableToDoTable extends React.Component<{}, FilterableToDoTableState> {
    constructor() {
        super()
        this.state = initialState
    }

    addItem = (text:string)=> {
        this.setState(
            Object.assign({}, this.state, {
                toDoItems: [...this.state.toDoItems, new Item(text)]
            })
        )
    }

    applySearchFilter = (searchFilter:string)=> {
        this.setState(Object.assign({}, this.state, {searchFilter}))
    }

    getFilteredItems = (items:Item[], searchFilter:string)=> {
        return items.filter(item => item.text.includes(searchFilter))
    }

    render() {
        const filteredItems = this.getFilteredItems(this.state.toDoItems, this.state.searchFilter)
        return (
            <div>
                <AddToDoItem onAdd={this.addItem}/>
                <SearchBar searchFilter={this.state.searchFilter} onSearch={this.applySearchFilter}/>
                <ToDoTable items={filteredItems}/>
            </div>
        )
    }
}