import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $seriesColor, $center, $radius }: any) => {
    const { $color, $tooltip } = useStyle();

    const title: any = {
        show: true,
        left: 'center',
        top: '35%',
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
        subtextStyle: {
            color: '#fff',
            fontSize: 12,
        },
    };

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
                show: true,
                color: '#fff',
            },
            labelLine: {
                show: true,
            },
            data: $data,
        },
    ];

    /**
     * 导出配置项
     */
    const options = {
        title: title,
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
