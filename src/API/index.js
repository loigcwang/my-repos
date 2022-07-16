import requests from './request'

export const reqCategoryList = () => requests({ url: 'http://localhost:3721/api/user/list', method: 'GET' })

// 个人信息
export const getUserInfo = () => requests({
    url: 'https://api.github.com/users/logicwang',
    method: 'GET',
    headers: {
        // 'content-type': 'application/json',
        Accept: 'application/vnd.github+json',
        'Authorization': 'token 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'
    }
})



// 仓库信息
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