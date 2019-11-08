// apis/index.js
// 把所有api的url统一在一起并挂在到vue对象上
// 所有接口都在一个文件里会比较大
// 可以按功能模块分组编写
let apis = {
    name1: 'https://api.apiopen.top/getTangPoetry?page=1&count=20',
    // 接口2
    name2: 'url2',
    // 接口3
    name3: 'url3',
    // 接口4
    name4: 'url4',
}
//需要让外部拿到
export default apis







// 使用方法
//需要调用接口的js文件
// this.$axios.post(this.$api.movies).then(res => {
//     console.log(res.data);
// });