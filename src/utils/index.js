import axios from 'axios'
import Mkit from 'markdown-it'
import hljs from 'highlight.js'
import markdownItGithubPreamble from 'markdown-it-github-preamble'
import markdownItFootnote from 'markdown-it-footnote'

const baseConfig = {
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000
}

export const formatTime = (date) => {
    // 本來是求距离当前时间差，算起来太麻烦了，直接返回年月日把
    // const now = Date.now()
    const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    // const [currentYear, currentMonth, currentDay] = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
    return `${year}-${month}-${day}`
}

export const md = new Mkit({
    html: true,
    linkify: true,
    highlight(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {
                console.log(err);
            }
        }
        return ''; // use external default escaping
    },
}).use(markdownItGithubPreamble).use(markdownItFootnote)

export const ajax = axios.create(baseConfig)

