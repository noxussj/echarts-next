import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

const convertToRem = (pxValue: number) => {
    const remValue = pxValue / 16; // 假设根元素字体大小为16px
    return `${remValue}rem`;
};

export default ({ $dom, $opt, $data, $seriesColor, $center, $radius }: any) => {
    const { $color, $tooltip } = useStyle();

    const legend: any = {
        show: false,
    };

    const series: any = [
        {
            name: 'Access From',
            type: 'pie',
            center: $center,
            radius: $radius,
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
            },
            label: {
                show: false,
                position: 'center',
                color: '#fff',
            },
            emphasis: {
                scale: 1,
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold',
                    formatter: (e: any) => {
                        let res = `{value|${e.value}}`;

                        res += `\n{name|${e.name} (${e.data.unit})}`;

                        return res;
                    },
                    rich: {
                        name: {
                            color: '#BBD3FB',
                            fontSize: convertToRem(11),
                            lineHeight: 20,
                        },
                        value: {
                            color: '#FFFFFF',
                            fontSize: convertToRem(20),
                            lineHeight: 20,
                        },
                    },
                },
            },
            labelLine: {
                show: false,
            },
            data: $data,
        },
    ];

    /**
     * 导出配置项
     */
    const options = {
        textStyle: {
            fontFamily: 'PingFang SC, Microsoft YaHei, Arial Regular',
        },
        color: $seriesColor || $color.theme,
        legend: legend,
        tooltip: Object.assign(
            {
                trigger: 'axis',
            },
            $tooltip
        ),
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    const instance = _echarts.render($dom, extens($opt, options));

    /**
     * 高亮第一项
     */
    instance.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0,
    });
};
