<template>
	<div class="goTop" v-if="topShow" @click="run">
		<img src="../../../../../static/svg/up.svg"/>
	</div>
</template>

<script>
	export default {
		name: 'goTop',
		data() {
			return {
				topShow: false
			}
		},
		mounted() {
			const _this = this;
			window.addEventListener('scroll',function(){
				let top = document.documentElement.scrollTop || document.body.scrollTop;
				if (_this.topShow) {
					if (top < 80) {
						_this.topShow = false;
					}
				} else {
					if (top > 300) {
						_this.topShow = true; 
					}
				}
			},false);
		},
		methods: {
			run() {
				let scrollPos;
				let timer = setInterval(function(){
					scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
					scrollPos -= 10;
						if(scrollPos > 0) {
						window.scrollTo(0, scrollPos);
					} else {
						window.scrollTo(0, 0);
						clearInterval(timer);
					}
				},1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.goTop
		position fixed
		right .2rem
		bottom 1.5rem
		height .8rem
		width .8rem
		border-radius 50%
		border 1px solid #999

		img
			height .4rem
			width .4rem
			margin-top -.38rem
			margin-left .18rem
</style>
