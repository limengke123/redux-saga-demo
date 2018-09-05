import axios from 'axios'

const baseConfig = {
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000
}

export const ajax = axios.create(baseConfig)

