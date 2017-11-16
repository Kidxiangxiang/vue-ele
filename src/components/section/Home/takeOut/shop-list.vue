<template>
	<section class="shopList">
		<ul>
			<li class="theList">
				<div class="clearFloat">
					<div class="shopLogo">
						<img src="//fuss10.elemecdn.com/f/8a/0853cc739311f4c16c4a96e73b06cpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="咬不得高祖生煎（体育店）" />
					</div>
					<div class="introduce clearFloat">
						<div class="line-one">
							<h6 class="title">
								<i class="icon-brand" content="品牌"></i>
								<span>咬不得高祖生煎（体育店）发人人分为非而非为</span>
							</h6>
							<ul class="supportWrap clearFloat">
								<li content="保"></li>
								<li content="票"></li>					
							</ul>
						</div>

						<div class="line-two clearFloat">
							<ratingStar></ratingStar>
							<p>
								<span>4.6</span>
								<span>月售868单</span>
							</p>
							<div class="fn-icon" content="蜂鸟专送"></div>
						</div>

						<div class="line-three clearFloat">
							<div class="money">
								<span>￥20起送</span>
								<span>配送费￥4</span>
							</div>
							<div class="time">
								<span>1.18km</span>
								<span>30分钟</span>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
import ratingStar from './ratingStar'
	export default {
		name: 'shopList',
		components: {
			ratingStar
		}
	}
</script>

<style lang="stylus" scoped>
	$grey = #666

	.shopList
		width 100%
		height 7rem

		.theList 
			margin .3rem 0
			padding 0 .2rem
			position relative
		
			.shopLogo 
				height 1.3rem
				width 1.3rem
				float left

				img 
					height 100%
					width 100%

			.introduce
				float left  
				margin-left .2rem
				width 5.5rem

				//店铺名称品牌
				.line-one 
					height .3rem
				
					.title
						float left
						width 4rem
						font-size .25rem
						/* overflow hidden
						text-overflow ellipsis
						white-space nowrap */
						
						span 
							display inline-block
							width 3.2rem
							overflow hidden
							text-overflow ellipsis
							white-space nowrap
							
							

						.icon-brand
							position relative
							white-space nowrap
							font-size .25rem
							font-weight 600
							text-align center
							margin-right .65rem

							&:after
								display block
								content attr(content)
								position absolute
								left 0
								top 0
								padding .04rem
								margin-top -.05rem
								border-radius .05rem
								background-image linear-gradient(-139deg,#fff100,#ffe339)
								background-image -webkit-linear-gradient(-139deg,#fff100,#ffe339)

					.supportWrap
						float right

						li
							position relative
							float left
							height .2rem
							width .2rem
							margin-right .1rem

							&:after
								position absolute
								left 0
								top 0
								content attr(content)
								color #999
								font-size .1rem

				//评分、月售、蜂鸟专送样式
				.line-two
					font-size .1rem

					p 
						float left
						margin-left 1rem
						margin-top -.05rem

						span
							margin-left .1rem
							color $grey

					.fn-icon
						float: right;

						&:after
							content attr(content)
							background-image linear-gradient(45deg,#0085ff,#0af)
							background-image -webkit-linear-gradient(45deg,#0085ff,#0af)
							color #fff
							border-radius .1rem
							padding 0 .05rem
				
				//配送、距离、时间
				.line-three
					font-size .1rem
					color $grey
					margin-top .25rem

					.money
						float left

						span 

							&:first-child
								border-right 1px solid #ddd
								padding-right .1rem
								margin-right .05rem


					.time
						float right 

						span
							&:first-child
								border-right 1px solid #ddd
								padding-right .1rem
								margin-right .05rem	
</style> 
