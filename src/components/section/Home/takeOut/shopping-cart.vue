<template>
	<div class="shopping-cart">
		<img src="../../../../../static/svg/cart.svg"/>
	</div>
</template>

<script>
	export default {
		name: 'shopping-cart'
	}
</script>

<style lang="stylus" scoped>
	.shopping-cart
		position fixed
		right .2rem
		bottom 2.5rem
		height .8rem
		width .8rem
		background-color #FFFFFF
		border-radius 50%
		border 1px solid #999

		img 
			height .55rem
			width .55rem
			margin-top -.38rem
			margin-left .08rem
</style>

