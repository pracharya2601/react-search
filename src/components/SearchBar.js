import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    // to bind either we have to use constructor function and bind or arrow function
    // arrow function automatically bind the this value on below 
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
        this.props.search(this.state.term)
        this.props.onVideoSubmit(this.state.term)
        this.props.onSelectWord((word) => this.setState({term: word}));
    }


    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search something</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
