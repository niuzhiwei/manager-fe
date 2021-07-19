/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/c58f07174cea741654eaa872ce6ed09d/api'
    },
    test: {
        baseApi: '//test.futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/c58f07174cea741654eaa872ce6ed09d/api'
    },
    prod: {
        baseApi: '//futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/c58f07174cea741654eaa872ce6ed09d/api'
    }
}
export default {
    env,
    mock: true,
    namespace: 'manager',
    ...EnvConfig[env]
}