import * as echarts from 'echarts';

class Echarts {
    /**
     * 渲染图表
     */
    render(dom: any, opt: any) {
        const instance = echarts.init(dom.value);

        instance.clear();

        instance.setOption(opt);

        return instance;
    }
}

const _echarts = new Echarts();

export default _echarts;
