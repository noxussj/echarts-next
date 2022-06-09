/**
 * 类型字典
 */
export let type = (data) => {
    let dist = {
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object Number]': 'number',
        '[object Function]': 'function',
        '[object String]': 'string',
        '[object Null]': 'null',
        '[object Undefined]': 'undefined',
    };

    return dist[Object.prototype.toString.call(data)];
};
