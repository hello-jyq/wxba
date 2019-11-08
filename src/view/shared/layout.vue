<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
  
</template>

<style>
  .mwContainer {
      width: 1280px;
      height: auto;
      margin: 0 auto;
      background-color: #eeeeee;
  }
</style>


<script>
import Header from '../../components/Header/index.vue'
import Footer from '../../components/Footer/index.vue'
export default {
  components:{
      Header,
      Footer
		}, 
		data () {
			return {

			}
		}
};
</script>