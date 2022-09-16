<template>
    <div class="echarts-next__pie-simple">
        <div ref="echarts" style="height: 100%"></div>

        <div class="pie-simple__legend">
            <div class="legend__item" v-for="(item, index) in props.data" :key="index">
                <span class="item-color1" :style="{ backgroundColor: props.color[index] }">
                    <span class="item-color2" :style="{ backgroundColor: props.color[index] }"></span>
                </span>
                <span class="item-name">{{ item.name }}</span>
                <span class="item-percent">{{ ((item.value / count.value) * 100).toFixed(2) }}%</span>
                <span class="item-value">{{ item.value }}{{ item.unit }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import render from './render';

const props = defineProps({
    /**
     * 用户配置项（继承已有配置，非必要时候勿用）
     */
    opt: {
        type: Object,
        default: () => ({}),
    },

    /**
     * 数据项
     */
    data: {
        type: Array,
        default: () => [
            { value: 1048, name: 'Search Engine', unit: '次' },
            { value: 735, name: 'Direct', unit: '次' },
            { value: 580, name: 'Email', unit: '次' },
            { value: 484, name: 'Union Ads', unit: '次' },
            { value: 300, name: 'Video Ads', unit: '次' },
        ],
    },

    /**
     * 颜色
     */
    color: {
        type: Array || null,
        default: null,
    },

    /**
     * 位置
     */
    center: {
        type: Array,
        default: null,
    },
});

const count = props.data.reduce((a: any, b: any) => ({ value: Number(a.value) + Number(b.value) }), { value: 0 });

const echarts = ref<null>(null);

onMounted(() => {
    render({ $dom: echarts, $opt: props.opt, $data: props.data, $seriesColor: props.color, $center: props.center });
});
</script>

<style lang="scss">
@import './index.scss';
</style>
