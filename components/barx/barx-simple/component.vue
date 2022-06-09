<template>
    <div ref="dom" class="echarts-dom"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import _echarts from '../../../utils/echarts-register.js';
import { extens } from '../../../core/echarts-extens.js';
import { $color, $grid, $fontSize, $tooltip, $xAxis, $yAxis } from '../../../core/echarts-style.js';

const props = defineProps({
    /**
     * 数据项
     */
    data: {
        type: Object,
        default: () => ({
            series: [
                {
                    name: '',
                    data: [120, 200, 150, 80, 70, 110, 130],
                },
            ],
            axis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }),
    },

    /**
     * 柱状图颜色
     */
    barColor: {
        type: Array,
        default: () => $color.theme,
    },

    /**
     * 柱状图宽度
     */
    barWidth: {
        type: Number,
        default: 15,
    },

    /**
     * 是否堆叠
     */
    stack: {
        type: Boolean,
        default: false,
    },

    /**
     * 用户配置项（继承已有配置，非必要时候勿用）
     */
    opt: {
        type: Object,
        default: () => ({}),
    },
});

const dom = ref<null>(null);

onMounted(() => {
    const series = [];

    props.data.series.forEach((item: any) => {
        series.push({
            type: 'bar',
            name: item.name,
            data: item.data,
            barWidth: props.barWidth,
            stack: props.stack,
        });
    });

    /**
     * 导出配置项
     */
    const options = {
        color: props.barColor,
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
        xAxis: Object.assign({ data: props.data.axis }, $xAxis),
        yAxis: [Object.assign({}, $yAxis)],
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render(dom, extens(props.opt, options));
});
</script>
