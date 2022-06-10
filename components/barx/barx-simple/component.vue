<template>
    <div ref="dom" class="echarts-dom"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import render from './render.js';

const props = defineProps({
    /**
     * 数据项
     */
    data: {
        type: Object,
        default: () => ({
            series: [
                {
                    name: '1月',
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
        type: Array || null,
        default: null,
    },

    /**
     * 柱状图宽度
     */
    barWidth: {
        type: Number,
        default: 15,
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
    render({ $dom: dom, $opt: props.opt, $data: props.data, $barColor: props.barColor, $barWidth: props.barWidth });
});
</script>
