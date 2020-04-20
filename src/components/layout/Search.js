import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = () => {


    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const {searchUsers, clearUsers, users} = githubContext;

    const {setAlert} = useContext(AlertContext);

    const onChange = e => {
        setText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert("Please Enter a Search Value", "light");
        } else {
            searchUsers(text);
            setText('');
        }
    }





    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}></input>
                <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
            </form>
            {users.length > 0 && <button className="btn btn-light btn-block" onClick={clearUsers}>
                Clear
                    </button>}
        </div>
    )

}

export default Search
