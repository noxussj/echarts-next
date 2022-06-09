const $color = {
    /**
     * 主题色-深色模式
     */
    theme: [
        'rgba(168, 39, 255, 1)',
        'rgba(130, 39, 255, 1)',
        'rgba(90, 0, 255, 1)',
        'rgba(31, 84, 255, 1)',
        'rgba(46, 41, 255, 1)',
        'rgba(6, 0, 255, 1)',
        'rgba(11, 80, 255, 1)',
        'rgba(0, 168, 255, 1)',
        'rgba(0, 204, 255, 1)',
        'rgba(15, 241, 255, 1)',
        'rgba(0, 255, 213, 1)',
        'rgba(0, 255, 612, 1)',
    ],

    /**
     * 标题/副标题
     */
    title: 'rgba(12, 139, 255, 1)',

    /**
     * 图例标签颜色
     */
    legendLabel: 'rgba(255, 255, 255, 1)',

    /**
     * X轴轴线颜色
     */
    xAxisLine: 'rgba(142, 245, 254, 0.15)',

    /**
     * X轴标签颜色
     */
    xAxisLabel: 'rgba(255, 255, 255, 1)',

    /**
     * Y轴轴线颜色
     */
    yAxisLine: 'rgba(142, 245, 254, 0.1)',

    /**
     * Y轴标签颜色
     */
    yAxisLabel: 'rgba(255, 255, 255, 1)',
};

const $grid = {
    /**
     * 上
     */
    top: 60,

    /**
     * 右
     */
    right: 20,

    /**
     * 下
     */
    bottom: 20,

    /**
     * 左
     */
    left: 20,

    /**
     * grid 区域是否包含坐标轴的刻度标签
     */
    containLabel: true,
};

const $fontSize = {
    /**
     * 标题/副标题
     */
    title: 12,

    /**
     * x轴刻度标签
     */
    xAxisLabel: 10,

    /**
     * x轴名称
     */
    xAxisName: 10,

    /**
     * y轴刻度标签
     */
    yAxisLabel: 12,

    /**
     * y轴名称
     */
    yAxisName: 12,

    /**
     * 图例标签
     */
    legendLabel: 12,
};

/**
 * 提示框风格
 */
const $tooltip = {
    backgroundColor: 'rgba(3, 36, 96, 1)',
    borderColor: 'rgba(0, 83, 255, 1)',
    borderWidth: 1,
    textStyle: {
        color: 'rgba(12, 139, 255, 1)',
    },
};

/**
 * x 轴风格
 */
const $xAxis = {
    type: 'category',
    axisTick: {
        show: false,
    },
    axisLabel: {
        color: $color.xAxisLabel,
        fontSize: $fontSize.xAxisLabel,
    },
    axisLine: {
        lineStyle: {
            color: $color.xAxisLine,
        },
    },
    splitLine: {
        show: true,
        lineStyle: {
            color: $color.xSplitLine,
        },
    },
};

/**
 * y 轴风格
 */
const $yAxis = {
    type: 'value',
    nameTextStyle: {
        color: $color.yAxisLabel,
        fontSize: $fontSize.yAxisName,
    },
    axisLabel: {
        color: $color.yAxisLabel,
        fontSize: $fontSize.yAxisLabel,
    },
    axisLine: {
        show: true,
        lineStyle: {
            color: $color.yAxisLine,
        },
    },
    splitLine: {
        show: true,
        lineStyle: {
            color: $color.ySplitLine,
        },
    },
};

export { $color, $grid, $fontSize, $tooltip, $xAxis, $yAxis };
