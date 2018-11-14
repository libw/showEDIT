let initialState = {
    show: 'dashboard',
}
export default function home(state = initialState, action = {}) {
    switch (action.type) {

        case 'SHOW':
        console.log(action)
            state.show = action.data
            return Object.assign({}, state, {
                show: action.payload
            });
            
     

        default:
            return state
    }
}

