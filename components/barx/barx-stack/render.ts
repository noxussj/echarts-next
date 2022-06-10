import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { $color, $grid, $fontSize, $tooltip, $xAxis, $yAxis } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $barColor, $barWidth }: any) => {
    const series: any = [];

    $data.series.forEach((item: any) => {
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
        xAxis: Object.assign({ data: $data.axis }, $xAxis.vertical),
        yAxis: [Object.assign({}, $yAxis.vertical)],
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options));
};
