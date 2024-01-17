import React, {useReducer} from 'react';
import usersReducer from '../reducers/usersReducer';

export const UsersContext = React.createContext();

const UsersContextProvider = (props) => {
    const initialState = {
        users: [],
        loading: false
    }
    const [state, dispatch] = useReducer(usersReducer, initialState);
    const searchUsers = (keyword) => {
        if (keyword.length > 0) {
            setLoading();
            // setLoading(true);
            fetch("https://api.github.com/search/users?q=" + keyword)
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: "SEARCH_USERS",
                        users: data.items
                    })
                    // setUsers(data.items);
                    // setLoading(false);
                });
        }
    }
    const setLoading = () => {
        dispatch({
            type: "SET_LOADING"
        });
    }
    const clearSearch = () => {
        dispatch({
            type: "CLEAR_SEARCH",
            users: []
        })
        // setUsers([]);

    }
    return (
        <UsersContext.Provider value={{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearSearch
        }}>
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;