<template>
	<div class="wrapper">
		<div class="swiper-container" id="wrapper">
			<div class="swiper-wrapper">
				<div class="swiper-list clearFloat">
					<a href="" v-for="one in listOne">
						<div>
							<img :src="one.pic"/>
						</div>
						<span>{{one.name}}</span>
					</a>
				</div>
				<div class="swiper-list">
					<a href="" v-for="two in listTwo">
						<div>
							<img :src="two.pic"/>
						</div>
						<span>{{two.name}}</span>
					</a>
				</div>
			</div>
			<div class="swiper-navigation">
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'nrsjzzy-swiper'
	export default {
		name: 'wrapper',
		data () {
			return {
				listOne: [
					{pic: "//fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "美食"},
					{pic: "//fuss10.elemecdn.com/8/a5/78332f1f7ff14afbb97b4f125911cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "下午茶"},
					{pic: "//fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "商超便利"},
					{pic: "//fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "预定早餐"},
					{pic: "//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "果蔬生鲜"},
					{pic: "//fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "新店特惠"},
					{pic: "//fuss10.elemecdn.com/6/74/785eafaf358fa6b18df37c64c3510jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "品牌专区"},
					{pic: "//fuss10.elemecdn.com/9/a6/e8422e3dc7f1bd3b4b99b0b2890f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "我的菜"}
				],
				listTwo: [
					{pic: "//fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "川湘菜"},
					{pic: "//fuss10.elemecdn.com/b/e1/58aa34ef194d216c9f2328f603588jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "医药健康"},
					{pic: "//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "浪漫鲜花"},
					{pic: "//fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "汉堡薯条"},
					{pic: "//fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "包子粥店"},
					{pic: "//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "地方菜系"},
					{pic: "//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "披萨意面"},
					{pic: "//fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name: "麻辣烫"}
				]
			}
		},
		mounted() {
			//初始化Swiper轮播
	      	new Swiper({
				dom: "#wrapper",
				navigation: true,
				auto: false
			});
	    }
	}
</script>

<style lang="stylus">
	.swiper-container,.swiper-wrapper
		width 7.5rem
		margin 0 auto
		height 4rem
		position relative
		overflow hidden
	
	.swiper-wrapper
		position relative
		height 100%

		.swiper-list
			position absolute
			width 100%
			height 100%
			top 0
			left 0
			transform translate3d(100%,0,0)
			-webkit-transform translate3d(100%,0,0)
			transition transform 0s;
			-webkit-transition transform 0s
			z-index 10
			
			a
				display block
				float left
				width 25%
				height 1.5rem
				margin-top 0.2rem
				font-size .2rem
				text-align center
				color: #000	

				div
					width 1rem
					height 1rem
					margin 0 auto
					margin-bottom .1rem

					img 
						width 100%
						height 100%

	.swiper-container

		.swiper-navigation
			position absolute
			bottom .1rem
			width 100%
			text-align center
			font-size 0.1rem
			z-index 100

			div
				display inline-block
				width .1rem
				height .1rem
				background-color #CCCCCC
				opacity .6
				border-radius 100%
				margin 0 .05rem

				&.active
					background #666666
					opacity 1
</style>
