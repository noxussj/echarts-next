<template>
    <div class="echarts-next__pie-simple">
        <div ref="echarts" style="height: 100%"></div>

        <div class="pie-simple__legend" v-if="props.legend === 'bottom' && count.value !== 0">
            <div class="legend__item" v-for="(item, index) in props.data" :key="index">
                <span class="item-color1" :style="{ backgroundColor: props.color[index] }">
                    <span class="item-color2" :style="{ backgroundColor: props.color[index] }"></span>
                </span>
                <span class="item-name">{{ item.name }}</span>
                <span class="item-percent">{{ ((item.value / count.value) * 100).toFixed(2) }}%</span>
                <span class="item-value">{{ item.value }}{{ item.unit }}</span>
            </div>
        </div>

        <div class="pie-simple__legend right" v-if="props.legend === 'right' && count.value !== 0">
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
import { ref, onMounted, watch, nextTick } from 'vue';
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
        default: () => ['50%', '50%'],
    },

    /**
     * 大小
     */
    radius: {
        type: Array,
        default: () => [60, 90],
    },

    /**
     * 图例方向
     */
    legend: {
        type: String,
        default: 'bottom',
    },
});

const count = ref(0);

const echarts = ref<null>(null);

setTimeout(() => {
    watch(
        () => props.data,
        async () => {
            if (props.data.length) {
                count.value = props.data.reduce((a: any, b: any) => ({ value: Number(a.value) + Number(b.value) }), { value: 0 });
                render({ $dom: echarts, $opt: props.opt, $data: props.data, $seriesColor: props.color, $center: props.center, $radius: props.radius });
            }
        },
        {
            deep: true,
            immediate: true,
        }
    );
}, 0);
</script>

<style lang="scss">
@import './index.scss';
</style>
