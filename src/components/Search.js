import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: ''
        }
    }
    chanceinput = (e) => {
        this.setState({
            keyword: e.target.value
        })

    }
    searchsubmit = (e) => {
        e.preventDefault();
        if (this.state.keyword === '') {
            this.props.displayAlert('Please Input Any Username', 'danger');
        } else {
            this.props.searchUsers(this.state.keyword);
            this.setState({ keyword: '' });
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <form onSubmit={this.searchsubmit}>
                    <div className="input-group mb-3">
                        <input type="text" value={this.state.keyword} onChange={this.chanceinput} className="form-control" placeholder="Username" />
                        <button className="btn btn-outline-primary" type="submit">Search Users</button>
                    </div>
                </form>
                {
                    this.props.showClearButton && <button className='btn btn-outline-danger mt-2 btn-block' onClick={this.props.clearSearch}>Clear Search</button>
                }

            </div>
        )
    }
}

export default Search