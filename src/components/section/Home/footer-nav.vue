<template>
	<footer class="bar">
		<nav class="clearFloat">
			<a class="active" href="">
				<img src="../../../../static/svg/ele-active.svg"/>
				<span>外卖</span>
			</a>
			<a href="">
				<img src="../../../../static/svg/discover.svg"/>
				<span>发现</span>
			</a>
			<a href="">
				<img src="../../../../static/svg/order.svg"/>
				<span>订单</span>
			</a>
			<a href="">
				<img src="../../../../static/svg/my.svg"/>
				<span>我的</span>
			</a>
		</nav>
	</footer>
</template>

<script>
	export default {
		name: 'footerNav'
	}
</script>

<style lang="stylus" scoped>
	$color = #CDCDCD

	.bar
		position fixed
		bottom 0
		height 1rem
		width 7.5rem
		background-color #ffffff
		padding-top .1rem
		border-top 1px solid $color
		z-index 999

		nav
			a
				display block
				float left
				width 25%
				height .1rem
				font-size .1rem
				text-align center
				color $color

				img 
					display block
					height .4rem
					width .4rem
					margin .1rem auto .07rem auto

			.active
				color #2295FF
</style>
