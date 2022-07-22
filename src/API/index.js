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

export async function getRepos(page = 1, per_page = 100) {
    const res = await requests({
        url: `https://api.github.com/users/logicwang/repos?page=${page}&per_page=${per_page}`,
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // Accept: 'application/vnd.github+json',
            'Authorization': 'token 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'
        }
    });
    // console.log(res.headers)res.headers.link

    if (!res.headers.link) {
        return Promise.resolve({
            data: res.data,
            page: []
        });
    }
    const pageData = res.headers.link.split(',').map(item => {
        const type = item.match(/rel="(.+)"/)[1];
        const url = item.match(/<(.+)>/)[1]
        return { type, url }
    });

    return Promise.resolve({
        data: res.data,
        page: pageData
    });
}


// repos
export const Repositories = (page = 1) => requests({
    url: `https://api.github.com/users/logicwang/repos?page=${page}&per_page=5`,
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