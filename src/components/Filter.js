import React , {Component} from 'react'

export default class Filter extends Component {
    constructor(){
        super()
        this.state = {
            filter_value: "",
            sort_value: ""
        }
    }

    handleFilterChange = (e) => {
        this.setState({
            filter_value: e.target.value
        })
    }

    handleSortChange = (e) => {
        this.setState({
            sort_value: e.target.value
        })
    }

    render(){
        return (
            <div>
                <lable>Filter Hogs</lable>
                <select onChange= {(e) => this.handleFilterChange(e)}>
                    <option value= "all">All Hogs</option>
                    <option value= "greased">Greased Hogs</option>
                </select>
                <lable>Sort Hogs</lable>
                <select onChange= {(e) => this.handleSortChange(e)}>
                    <option value= "">Unsort</option>
                    <option value= "name">Sort by name</option>
                    <option value= "weight">Sort by weight</option>
                </select>
                <br/>
                <br/>
                <button onClick={() => this.props.filter_hogs(this.state.filter_value,this.state.sort_value)}>Select</button>
            </div>
        )
    }
}