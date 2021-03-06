import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { $color, $grid, $tooltip, $xAxis, $yAxis, $legend } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $barColor, $barWidth }: any) => {
    const series: any = [];

    $data.series.forEach((item: any) => {
        series.push({
            type: 'bar',
            name: item.name,
            data: item.data,
            barWidth: $barWidth,
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
        legend: Object.assign({}, $legend),
        xAxis: Object.assign({ data: $data.axis }, $xAxis.vertical),
        yAxis: [Object.assign({}, $yAxis.vertical)],
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options));
};
