import requests from './request'

// export const reqCategoryList = () => requests({ url: 'http://localhost:3721/api/user/list', method: 'GET' })

// user
export const getUserInfo = () => requests({
    url: 'https://api.github.com/users/logicwang',
    method: 'GET',
    headers: {
        // 'content-type': 'application/json',
        Accept: 'application/vnd.github+json',
        'Authorization': 'token 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'
    }
})



// repos
export const Repositories = () => requests({
    url: 'https://api.github.com/users/logicwang/repos',
    method: 'GET',
    headers: {
        // 'content-type': 'application/json',
        Accept: 'application/vnd.github+json',
        'Authorization': 'token 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'
    }
})

//——post 有参
//params至少是一个空对象
// export const reqGetSearchInfo = (params) => requests({ url: '不带/api', method: 'post', data: params })