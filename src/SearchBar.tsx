import * as React from 'react'

export default class SearchBar extends React.Component<{searchFilter?:string, onSearch:(searchFilter:string)=>void }, {}> {
    searchFilterInput:HTMLInputElement
    onSearch = ()=> {
        this.props.onSearch(this.searchFilterInput.value)
    }

    render() {
        return (
            <div>
                <input ref={input => this.searchFilterInput = input} type="text"
                       defaultValue={this.props.searchFilter}/>
                <button onClick={this.onSearch}>Search</button>
            </div>
        )
    }
}