<template>
    <div class="rating_container">
        <section class="star_container">
            <svg class="grey_fill" v-for="num in 5" :key="num">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
            </svg>
        </section>
        <div :style="'width:' + rating*1/5 + 'rem'" class="star_overflow">   <!-- 乘上元素宽度再除以5 -->
            <section class="star_container" >
                <svg  class="orange_fill" v-for="num in 5" :key="num">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
                </svg>
            </section>
        </div>
    </div>
</template>
   
<script>
    export default {
        name: 'star',
        data() {
            return {
                rating: 4.6
            }
        }
    }
</script>

<style scoped>
    .rating_container {
        position: relative;
        top: .2rem;
        width: 1rem;
    }
    .star_overflow{
        overflow: hidden;
        position: relative;
        height: .3rem;
    }
    .star_container{
        position: absolute;
        display: flex;
        width: 1rem;
        height: .3rem;
    }   
    .grey_fill{
        fill: #d1d1d1;
    }
    .orange_fill{
        fill: #ff9a0d;
    }
</style>
