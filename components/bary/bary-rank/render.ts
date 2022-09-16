import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $seriesColor, $areaGradient, $barWidth }: any) => {
    const { $color, $grid, $tooltip, $xAxis, $yAxis, $legend } = useStyle();

    const series: any = [];

    $data.series.forEach((item: any, index: number) => {
        const data: any = [];

        item.data.forEach((x: any, i: number) => {
            data.push({
                value: x,
                itemStyle: {
                    ...($areaGradient
                        ? {
                              color: {
                                  type: 'linear',
                                  x: 0,
                                  y: 0,
                                  x2: 1,
                                  y2: 0,
                                  colorStops: [
                                      {
                                          offset: 0,
                                          color: $areaGradient[i][0],
                                      },
                                      {
                                          offset: 1,
                                          color: $areaGradient[i][1],
                                      },
                                  ],
                              },
                          }
                        : {}),
                },
            });
        });

        series.push({
            type: 'bar',
            name: item.name,
            data: data,
            barWidth: $barWidth,
            itemStyle: {
                borderRadius: 4,
            },
        });
    });

    /**
     * 导出配置项
     */
    const options = {
        color: $seriesColor || $color.theme,
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
        xAxis: Object.assign({}, $xAxis.horizontal),
        yAxis: [Object.assign({ data: $data.axis }, $yAxis.horizontal)],
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options));
};
