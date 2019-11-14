<template>
    <div class="body">
        <div class="head">
            <div class="img">
                <img :src="'http://localhost:3000'+$store.state.my_title.headPic" alt="">
            </div>
            <div class="intro">
                <p>陈亦霏</p>
                <div> <span>职业中医师</span> <span>疑难病儿科</span></div>
            </div>
        </div>
        <div class="content">
            <div>
                <ul>
                    <li>当归20g 知母15g 生薏仁30g 藏术15g</li>
                    <li>当归20g 知母15g 生薏仁30g 藏术15g</li>
                    <li>当归20g 知母15g 生薏仁30g 藏术15g</li>
                    <li>当归20g 知母15g 生薏仁30g 藏术15g</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {

    },
}
</script>
<style lang="scss" scoped>
    .body{
        background: #fff;
        position: relative;
        div.head{
            height: .9rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-bottom: .01rem solid #ccc;
            .img{
                height: .72rem;
                width: .72rem;
                img{
                    width: 100%;
                    border-radius: 50%;
                }
            }
            .intro{
                justify-self: flex-start;
                display: flex;
                flex-direction: column;
                margin-left: -1rem;
                p{
                width: 1.8rem;
                align-self: flex-start;
                }
                div{
                    display: flex;
                    span{
                        flex: 1
                    }
                }
            }
        }
        div.content{
            padding: .15rem .25rem;
            div{
                padding:.15rem 0;
                border: .01rem solid #ccc;
                text-align: center;
            }
        }


    }
</style>
