import React, {Component} from 'react'
import axios from 'axios'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(' THISSTATE FILTER BEFORE', this.state.filter)
    this.props.handleUpdate(this.state.filter)
    this.setState({
      filter: ''
    })
    console.log(' THISSTATE FILTER SHLD BE EMPTY', this.state.filter)
  }

  render() {
    //console.log("THIS>PROPS>JOBS", this.props.jobs)
    return (
      <form onSubmit={this.handleSubmit}>
        <div id="search-jobs" className=" mt-0">
          <label htmlFor="name">Search for jobs</label>
          <input
            type="text"
            className="form-control"
            name="filter"
            value={this.state.filteredjobs}
            onChange={this.handleChange}
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      </form>
    )
  }
}

export default SearchBar
