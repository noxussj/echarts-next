import * as echarts from 'echarts';

class Echarts {
    /**
     * 渲染图表
     */
    render(dom, opt) {
        const instance = echarts.init(dom.value);

        instance.setOption(opt);

        return instance;
    }
}

const _echarts = new Echarts();

export default _echarts;
