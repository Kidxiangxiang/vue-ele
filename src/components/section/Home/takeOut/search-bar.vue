<template>
	<section class="search" :class="{'toFixed' : isFixed}">
		<div>搜索商家、商品名称</div>
	</section>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				isFixed: false
			}
		},
		mounted() {
			const _this = this;
			window.addEventListener('scroll',function(){
				let top = document.documentElement.scrollTop || document.body.scrollTop;
				if (_this.isFixed) {
					if (top < 40) {
						_this.isFixed = false;
					}
				} else {
					if (top > 40) {
						console.log("需要固定了");
						_this.isFixed = true; 
					}
				}
			},false);
		}
	}
</script>

<style lang="stylus" scoped>
	.search
		height 1rem
		width 7.5rem
		background-color #0092FF
		padding .15rem .3rem

		div
			width 100%
			height .7rem
			background-color #fff
			font-size .3rem
			text-align center
			line-height .7rem

	.toFixed
		position fixed
		top 0
		z-index 666
</style>
