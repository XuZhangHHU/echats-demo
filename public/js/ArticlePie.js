/**
 * Created by zky on 2016/8/19.
 */

pie();
function pie(){
require.config({
    paths: {
        echarts: 'echarts/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/pie'
    ],
    
    
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('Articlepie'));
        var dataStyle = {
            normal: {
                label : {
                    show: false,
                    formatter: '{c}%'
                }
            }
        };
        var option = {
            title:{
                text:'农业资讯各栏目文章统计'
            },
            tooltip: {
                trigger: 'item',
                formatter : '{a0}<br/>{b}:{c0}篇({d}%)<br/>'
            },
            legend: {
                orient:'vertical',
                x:'right',
                data : ["安全发布","通知公告","政策法规","农业标准","安全知识","质量追溯","农资监管"]

            },
            series : [
                {
                    "name":"各栏目文章统计",
                    "type":"pie",
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:231, name:'安全发布'},
                        {value:240, name:'通知公告'},
                        {value:235, name:'政策法规'},
                        {value:210, name:'农业标准'},
                        {value:234, name:'安全知识'},
                        {value:135, name:'质量追溯'},
                        {value:154, name:'农资监管'}
                    ]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);}