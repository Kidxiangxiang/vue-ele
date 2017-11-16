<template>
	<section class="specialModule">
		<div class="hot clearFloat">
			<div>
				<h6>限量抢购</h6>
				<p class="des">超值美味9.9元起</p>
				<p><span>{{num}}人</span>正在抢  ></p>
				<img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
			</div>
			<div>
				<h6>热卖套餐</h6>
				<p class="des">销量最高，好评最多</p>
				<p><span>TOP100  ></span></p>
				<img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
			</div>
		</div>
		<div class="choiceness clearFloat">
			<div class="model">
				<h6>天天特价</h6>
				<span class="label">低至1折</span>
				<img src="//fuss10.elemecdn.com/5/06/ddb537220b8c56d4ef6ae22718984png.png?imageMogr/format/webp/thumbnail/!232x154r/gravity/Center/crop/232x154/"/>
			</div>
			<div class="model">
				<h6>乐享鲜果</h6>
				<span class="label">鲜果乐享7折</span>
				<img src="//fuss10.elemecdn.com/a/98/8010e87e876a7bf137597bf7fd324png.png?imageMogr/format/webp/thumbnail/!232x154r/gravity/Center/crop/232x154/"/>
			</div>
			<div class="model">
				<h6>品质优选</h6>
				<span class="label">尖货来袭</span>
				<img src="//fuss10.elemecdn.com/a/b5/dcb5bff74242e06b3c2efee1cbffcpng.png?imageMogr/format/webp/thumbnail/!232x154r/gravity/Center/crop/232x154/"/>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from "axios"
	export default {
		name: 'specialModule',
		data() {
			return {
				num: 0
			}
		},
		created() {
			this.getData();
		},
		methods: {
			getData() {
				let _this = this;
				axios.get('../static/json/special.json')
					.then(res => {
						let data = res.data;
						_this.num = data.number;
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.specialModule
		width 100%
		height 5.3rem

		&:after
			content ""
			display block
			height .2rem
			width 100%
			background-color #F8F8F8

		.hot
			margin 0 .2rem
			position relative

			div
				float left
				height 2.5rem
				width 3.5rem
				background-color #F8F8F8
				margin-right .1rem
				padding .3rem 0 0 .3rem

				img 
					height 1.6rem
					width 2.2rem
					position absolute
					right 0
					bottom -.2rem

				&:first-child
					h6,span
						color red
					
					img
						right 3.5rem
						bottom -.2rem

					span 
						color #ff5339
						border-color #ffa89b

				&:last-child
					margin-right 0

					span
						color #af8260
				
			h6
				font-size .35rem

			p 
				font-size .25rem
				margin-top .2rem

			.des 
				color #777

		.choiceness
			margin .1rem .2rem .2rem .2rem
			position relative

			div
				&:last-child
					margin-right 0

			.model
				float left
				height 2.5rem
				width 2.3rem
				background-color #F8F8F8
				margin-right .1rem
				text-align center
				padding-top .4rem
				font-size 0

				img 
					height 1.5rem
					width 2rem
					position absolute
					bottom 0
				
				&:first-child 

					img
						left: .1rem
				
				&:nth-child(2) 

					img
						left: 2.5rem

				&:nth-child(3) 

					img
						right .1rem

			h6 
				font-size .32rem
				margin-bottom .15rem
			
			.label 
				font-size .1rem
				padding 0 .03rem
				border 1px solid #000		
</style>
