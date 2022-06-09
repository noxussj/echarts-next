import _ from 'lodash-es';
import assign from '../utils/object-assign.js';

/**
 * 模式检测
 */
function _modeCheck(FirstOBJ, SecondOBJ) {
    if (FirstOBJ.baseOption && !SecondOBJ.baseOption) {
        console.error('提示', 'option两者格式不符合');
    }

    if (!FirstOBJ.baseOption && SecondOBJ.baseOption) {
        console.error('提示', 'option两者格式不符合');
    }

    if (FirstOBJ.options && !SecondOBJ.options) {
        console.error('提示', 'option两者格式不符合');
    }

    if (!FirstOBJ.options && SecondOBJ.options) {
        console.error('提示', 'option两者格式不符合');
    }
}

/**
 * 继承
 */
function _extens(FirstOBJ, SecondOBJ) {
    let filterKeys = ['data', 'radius', 'center', 'color']; // 过滤keys

    let newOBJ = _.cloneDeep(SecondOBJ);

    assign(newOBJ, FirstOBJ, filterKeys); // 会直接改变第一项

    return newOBJ;
}

/**
 * 继承
 */
const extens = (FirstOBJ, SecondOBJ) => {
    _modeCheck(FirstOBJ, SecondOBJ);

    let option = _extens(FirstOBJ, SecondOBJ);

    return option;
};

export { extens };
