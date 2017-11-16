<template>
		<div class="hello">
    		<eleHead></eleHead>
    		<router-view></router-view>
    		<div class="kongbai"></div>
    		<footerNav></footerNav>
			<svgIcon></svgIcon>
		</div>
</template>

<script>
		import eleHead from './section/Home/head.vue'
		import footerNav from './section/Home/footer-nav.vue'
		import svgIcon from './SVG/svg.vue'
		export default {
  			name: 'HelloWorld',
  			components: {
				eleHead,
				footerNav,
				svgIcon
  			},
  			data () {
				return {
					
    			}
  			}
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	.kongbai
		height 1rem
</style>

