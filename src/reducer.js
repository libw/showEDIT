let initialState = {
    show: 'dashboard',
    isLogin: sessionStorage.getItem('token')
}
export default function home(state = initialState, action = {}) {
    switch (action.type) {

        case 'SHOW':
            // console.log(action)
            state.show = action.data
            return Object.assign({}, state, {
                show: action.data
            });

        case 'ISLOGIN':

            state.isLogin = action.data
            console.log(state.isLogin)
            console.log(action)
            return Object.assign({}, state, {});

        case 'NOLOGIN':
            state.isLogin = action.data
alert(111)
            sessionStorage.removeItem('token')

            return Object.assign({}, state, {});

        default:
            return state
    }
}

