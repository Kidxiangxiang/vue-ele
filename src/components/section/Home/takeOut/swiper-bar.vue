<template>
	<section class="swiperBar">
		<ul>
			<li v-for="recommend in recommendList">
				{{recommend.name}}
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'swiperBar',
		data(){
			return{
				recommendList: [
					{name: "金拱门"},
					{name: "一点点"},
					{name: "肯基基"},
					{name: "好多好多好吃的"},
					{name: "麻辣香锅"},
					{name: "面"},
					{name: "肉蟹煲"},
					{name: "炒饭"},
					{name: "黄焖鸡"},
					{name: "好利来"}
				]

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.swiperBar
		border-top 1px solid #ccc
		height .6rem
		background-color #0092FF
		color #fff
		font-size .25rem
		line-height .6rem
		padding 0 .3rem

		ul 
			width 100%
			white-space nowrap    //空白时候不换行，把所有内容都保持在一行
			overflow-x auto
			overflow-y hidden

			li
				display inline-block
				margin-left .3rem

				&:first-child
					margin-left 0
</style>
