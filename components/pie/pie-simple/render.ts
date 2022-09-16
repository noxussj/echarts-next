import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $seriesColor, $center }: any) => {
    const { $color, $tooltip } = useStyle();

    const legend: any = {
        show: false,
    };

    const series: any = [
        {
            name: 'Access From',
            type: 'pie',
            center: $center,
            radius: [60, 90],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
                color: '#fff',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold',
                    formatter: (e: any) => {
                        let res = `{name|${e.name}}`;

                        res += `\n{value|${e.value}}`;

                        return res;
                    },
                    rich: {
                        name: {
                            lineHeight: 30,
                        },
                        value: {
                            lineHeight: 30,
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
    _echarts.render($dom, extens($opt, options));
};
