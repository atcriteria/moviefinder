import { useState } from 'react';
import { getData } from '../actions/index';
// Have to map action functions to the component through
// props in order for the middleware to call them.
import { connect } from 'react-redux';

const initialValues = {
    name: ""
}

const Search = ({getData}) => {
    const [search, setSearch] = useState(initialValues)

    const handleChange = e => {
        return setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log("handleSubmit called", search.name)
        // alert(`Implement me! You searched for: "${search.name}"`)
        // Currently we only search for name, but we can extend
        // this to account for other variables, such as year
        getData({search: search.name})
    }

    return(
        <div>
            <h3>Searching for: {search.name}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={search.name} onChange={handleChange} placeholder="Search for a movie by name" size="60" maxLength="55" />
                <button>Search</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return{

    }
}
export default connect(mapStateToProps, { getData })(Search)