console.log("加载成功");
/* 
    配置当前的这个项目用到了哪些模块
    遵从的都是AMD规范

    所有.js文件,后缀都可以省略
*/
// require.config({
//     paths:{
//         "jquery":"jquery1.12.4.min.js",
//         "jquery-cookie":"jquery.cookie",
//         "nav":nav
//     },
//     shim:{
//         //设置依赖关系
//         "jquery-cookie":["jquery"]
//     }
// })


// require(["nav"],function(nav){
//     nav.download();

//     nav.banner();
//     nav.leftNavTab();
//     nav.topNavTab();
//     nav.searchTab();
// })