import * as echarts from 'echarts';

class Echarts {
    loaded: any[];

    constructor() {
        this.loaded = [];

        window.addEventListener('resize', () => {
            this.resize();
        });
    }

    /**
     * 渲染图表
     */
    render(dom: any, opt: any) {
        const instance = echarts.init(dom.value);

        instance.clear();

        instance.setOption(opt);

        this.loaded.push(instance);

        return instance;
    }

    /**
     * 图表重载
     */
    resize() {
        this.loaded.forEach((instance: any) => {
            setTimeout(() => {
                instance.resize();
            }, 0);
        });
    }

    /**
     * 销毁图表
     */
    destroy() {
        while (this.loaded.length) {
            const instance = this.loaded.pop();

            setTimeout(() => {
                instance.dispose();
            }, 0);
        }
    }
}

const _echarts = new Echarts();

export default _echarts;
