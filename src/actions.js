export function homeSwtich(data) { 
    return { type: 'SHOW', data: data.payload } 
}

export function isLogin(data) {   
    return { type: 'ISLOGIN', data: data.payload }  
}

export function noLogin(data) {   
    return { type: 'NOLOGIN', data: data.payload }  
}

