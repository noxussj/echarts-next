import _echarts from '../../../utils/echarts-register.js';
import { extens } from '../../../core/echarts-extens.js';
import { $color, $grid, $fontSize, $tooltip, $xAxis, $yAxis } from '../../../core/echarts-style.js';

export default ({ $dom, $opt, $data, $barColor, $barWidth }) => {
    const series = [];

    $data.series.forEach((item) => {
        series.push({
            type: 'bar',
            name: item.name,
            data: item.data,
            barWidth: $barWidth,
            stack: true,
        });
    });

    /**
     * 导出配置项
     */
    const options = {
        color: $barColor || $color.theme,
        grid: $grid,
        tooltip: Object.assign(
            {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            $tooltip
        ),
        legend: {
            show: true,
            icon: 'rect',
            top: 10,
            right: 20,
            itemWidth: 10,
            itemHeight: 3,
            itemGap: 15,
            textStyle: {
                color: '#fff',
                fontSize: $fontSize.legendLabel,
            },
        },
        xAxis: Object.assign({ data: $data.axis }, $xAxis),
        yAxis: [Object.assign({}, $yAxis)],
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options));
};
