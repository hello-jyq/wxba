<template>
    <footer id="footer" class="mwFooter">
        <div class="mwFootService">
            <div class="mwFootSerBox">
                <div class="mwFootSerItem" 
                v-for="(item,index) in serviceList" :key="index">
                    <div class="mwFootSerImg">
                        <img :src="item.imgUrl">
                    </div>
                    <span class="mwFooterIconItemText">{{item.text}}</span>
                </div>
            </div>
        </div>
        <div class="mwFootMessage">
            <div class="mwFootMessBox">
                <div class="mwFootMessPick">
                    <h5 class="mwFootMessTitle">Showroom / Pickup</h5>
                    <div class="mwFootMessTxt">
                        Unit F3, 3-29 Birnie Avenue
                        (off Bachell Ave)<br />
                        Lidcombe, NSW 2141, Australia<br />
                        <img src="">1300 727 446
                    </div>
                </div>
                <div class="mwFootMessService">
                    <h5 class="mwFootMessTitle">Service Hours</h5>
                    <div class="mwFootMessTxt">
                        OMonday to Friday: 9am to 6pm (AEST)<br />
                        Saturday: 9am to 1pm (AEST)
                    </div>
                </div>
                <div class="mwFootMessSecured">
                    <h5 class="mwFootMessTitle">Secured Payments With</h5>
                    <div class="mwFootMessImg">
                        <div class="mwFootMessImgPay">
                            <img src="../../assets/images/icons/paypal.png">
                            <img src="../../assets/images/icons/visa.png">
                            <img src="../../assets/images/icons/mastercard.png">
                            <img src="../../assets/images/icons/americanexpress.png">
                            <img src="../../assets/images/icons/bpay.png">
                            <img src="../../assets/images/icons/zip.png">
                        </div>
                        <div class="mwFootMessImgSSL">
                            <img src="../../assets/images/icons/norton.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mwFooterDes">
            <div class="mwWidthBox mwClearFix">
                <p class="mwFooterDesTxt">Mwave Australia © 2018. All rights reserved. A.B.N. 38 114 422 507. All
                    prices and specifications are subject to change without notice.</p>
                <div class="mwFRight">
                    <img class="mwFooterDesImg" src="../../assets/images/icons/google.png">
                    <img class="mwFooterDesImg" src="../../assets/images/icons/app.png">
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
    import '../../assets/css/compontents/footer/footer.css'
    export default {
        name: 'Footer',
        data () {
            return{
                serviceList:[
                    {
                        imgUrl: require('@/assets/images/icons/footerstar.png'),
                        text: '4.4 Out of 5 Stars From Over 2000+ Reviews'
                    },
                    {
                        imgUrl: require('@/assets/images/icons/footerfree.png'),
                        text: 'Free Shipping on Warranty both ways*'
                    },
                    {
                        imgUrl: require('@/assets/images/icons/footerfast.png'),
                        text: 'Fast Order Process &amp; Dispatch'
                    },
                    {
                        imgUrl: require('@/assets/images/icons/footersafe.png'),
                        text: 'Shop Safely &amp; Securely Online'
                    }
                ],
            }
        }
    }
</script>