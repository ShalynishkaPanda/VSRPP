const initialState = {auth: false}

export default function entering(state = initialState, action){
    switch (action.type){
        case "logIn":
            localStorage.setItem('auth', true);
            return {...state, auth: true};
        case "logOut":
            localStorage.clear();
            return {...state, auth: false};
        default:
            return state;
    }
}