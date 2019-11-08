<template>
    <div id="content" class="mwContainer">
        <div class="mwLoginContainer">
            <div class="mwWelcomLogin">
                <span ref="tes">Welcome to the</span>
                <span>MWave website</span>
            </div>
            <router-link to="" class="mwBtnBuylogin">SHOP NOW</router-link>
            <form class="registerform" @submit.prevent="onSubmit">
              <div class="mwBoxSecure mwBoxLogin">
                <div class="mwSecureTitle">Sign in</div>
                <ul class="mwLoginInput">
                    <li class="mwSecureItemMove">
                        <div class="mwClearFix">
                            <input  class="mwEmailInpt" id="mwInputEmail"  type="text" placeholder="Email address"
                                maxlength="50" name="email" v-model="form.userEmail" v-validate="'required|email'"  />
                            <div class="mwIconEmail"></div>
                        </div>
                        <div class="Validform_checktip" v-show="errors.has('email')">
                            <span class="Validform_subtip Validform_wrong">{{ errors.first('email') }}</span>
                        </div>
                    </li>
                    <li class="mwSecureItemMove">
                        <div class="mwClearFix">
                            <i class="mwEyeIcon"  @click="onEyeClick"></i>
                            <input class="mwPasswordInpt" id="mwInputPassword"  type="password" 
                                placeholder="Password"  maxlength="22" 
                                name="password" v-model="form.userPassword" v-validate="'required|password'" />
                            <div class="mwIconPassword"></div>
                        </div>
                        <div class="Validform_checktip" v-show="errors.has('password')">
                            <span class="Validform_subtip Validform_wrong">{{ errors.first('password') }}</span>
                        </div>
                    </li>
                    <li class="mwLoginTotalError">
                        The email address or password is incorrect . Please try again.
                    </li>
                </ul>
                  
                <div class="mwVerBox" v-show="recaptcha">
             
                    <div id="imgVer" style="display:inline-block;width:440px;height:257px;background-color:#ccc">
                   <div id="recaptcha" class="g-recaptcha" data-callback="robotVerified" data-sitekey="6Lf9KqIUAAAAAEJcftDJotFMRRRjpdlL9HjMLiAw"></div>
                      	
	               
                    </div>
                    <div class="mwVerArrow" >
                      
                    </div>
                </div>
                <div class="mwForgotPassword">
                    <router-link to="/forgotpassword">Forgot your password?</router-link>
                </div>

                <div>
                    <button type="submit" class="mwBtnPurple mwBtnSign">Sign in</button>
                    <router-link class="mwBtnPurpleOutline mwBtnRegister" to="/register">Register</router-link>   
                </div>

              </div>
            </form>
        </div>
    </div>
</template>

<script>
import "../../assets/css/secure/secure.css";
import validator from "../../assets/js/validator.js";
import eyeIcon from "../../assets/addon/mixins/eyeIcon";

export default {
  mixins: [eyeIcon],
  components: {},
  data() {
    return {
      form: {
        userEmail: "",
        userPassword: ""
      },
      recaptcha: false
    };
  },
  metaInfo: {
    title: "Account Login | Mwave.com.au",
    meta: [
      {
        name: "description",
        content: "Secure three-step checkout with Mwave.com.au"
      }
    ]
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.recaptcha = true;
          //  this.robotVerified();

          console.log("成功");

          return;
        }
        console.log("失败");
      });
    }
  },
  mounted: function () {
    this.$refs.tes.innerHTML = 'green';
    let s = navigator.appName
    console.log(s)
  }
};
</script>


