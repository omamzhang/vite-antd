/*
 * @Author: zyl omamzhange@gmail.com
 * @Date: 2024-03-13 20:17:05
 * @LastEditors: zyl omamzhange@gmail.com
 * @LastEditTime: 2024-03-13 20:40:33
 * @FilePath: /vite-antd/src/api/mock.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEhttps://randomuser.me/api/?results=10
 */
export const freeGetRecord = {
    user: 'https://api.xygeng.cn/openapi/bing#',
    avator: 'https://api.xygeng.cn/openapi/bing/view',
    content: 'https://api.xygeng.cn/openapi/one'
};

export const freeGetList = {
    // https://randomuser.me/documentation#howto
    user: {
        url: 'https://randomuser.me/api/?results=10'
    },
    userPage: {
        url: 'https://randomuser.me/api/?page=3&results=10&seed=abc'
    },
    // https://opentdb.com/api_config.php
    film: {
        url: 'https://opentdb.com/api.php?amount=10'
    }
};


export const freePostRecord = {
    user: {
        data: { "index": 0 },
        url: 'https://api.xygeng.cn/openapi/bing/info',
    },
};

export default {
    freeGetRecord,
    freeGetList,
    freePostRecord
};


