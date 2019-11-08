<template>
    <header id="header" class="mwHeader">
        <div class="mwHeadTop">
            <div class="mwWidthBox mwClearFix">
                <div class="mwFLeft">
                    <ul class="mwTopBar">
                        <li>
                            <router-link to="">
                                <img src="../../assets/images/icons/eslogo.png">
                                <span>Mwave eSports</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <img src="../../assets/images/icons/cpclogo.png">
                                <span>Custom Build PC</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="mwFRight">
                    <ul class="mwTopBar">
                        <li class="mwTopMyAccount" v-if="!hidden">
                            <router-link to="">
                                <img class="mwImgCircle" src="../../assets/images/user/a1.jpg" />
                                <span>Hi,otto</span>
                            </router-link>
                            <div class="mwMyAccountMenu">
                                <div class="mwMyAccountName">
                                    <img src="../../assets/images/user/a1.jpg">
                                    <div>Welcome to mwave.com.au</div>
                                </div>
                                <router-link to="" class="mwBtnMyAccount">Sign out</router-link>
                                <router-link to="" class="mwBtnMyAccount">Register</router-link>
                                <dl class="mwMyAccountDetail">
                                    <dt><router-link to="">My Account</router-link></dt>
                                    <dd><router-link to="">My Order</router-link></dd>
                                    <dd><router-link to="">Gift Cards / Coupon</router-link></dd>
                                    <dd><router-link to="">Account Detail</router-link></dd>
                                    <dd><router-link to="">Wish List</router-link></dd>
                                    <dd><router-link to="">Warranty / Returns</router-link></dd>
                                    <dd><router-link to="">Business Quote</router-link></dd>
                                    <dd><a>Web Admin</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <router-link to="">
                                <img src="../../assets/images/icons/mvip.png">
                                <span>Cares</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <img src="../../assets/images/icons/help.png">
                                <span>Customer Service</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mwHeadContent">
            <router-link to="" class="mwHeadLog">
                <img src="../../assets/images/icons/logo.png">
            </router-link>
        </div>
    </header>
</template>

<script>
    import '../../assets/css/compontents/header/header.css'
    export default {
        name: 'Header',
        data () {
            return{
                hidden: true
            }
        },
        watch:{
            $route(to,form){
                this.hidden = to.meta.hidden
            }
        },
        mounted(){
            this.hidden = this.$route.meta.hidden
        }
    }
</script>