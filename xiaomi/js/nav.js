//处理首页导航部分，声明模块遵从AMD
// define(["jquery"],function($){
//     function download(){
//         //数据下载
//         $.ajax({
//             type:"get",
//             url:"../js/nav.json",
//             success:function(result){
//                 // alert(result);
//                 var bannerArr = result.banner;
//                 //通过循环将数据添加到页面上
//                 for(var i=0;i<bannerArr.length;i++){
//                     $(``)
//                 }
//             },
//             error:function(msg){
//                 console.log(msg)
//             }
//         })
//     }

//     return{
//         download: download,
//         banner: banner
//     }
// }) 


//搜索框

// function searchTab(){
//     $('#search').focus(function(){
//         $("#J_keywordList").removeClass("hide").addClass("show");
//     }).blur(function(){
//         $("#J_keywordList").removeClass("show").addClass("hide");
//     })
// }

//侧面导航栏
// leftNavTabload();
// function leftNavTabload(){
//     $.ajax({
//         url:"../js/slideNav.json",
//         success:function(result){
//             var slideArr = result.slideNav;
//             for(var i= 0;i< slideArr.length;i++){
//                 var node = $(`<li class="category-item">
//                 <a href="#">
//                     ${sideArr[i].title}
//                 <em class="iconfont iconarrow-right"></em>
//                 </a>
//                 <div class="children clearfix">
        
//                 </div>
//             </li>`);
//                 node.appendTo('#J_categoryList');

//                 //取出当前这个选项的子节点
//                 var childArr = slideArr[i].child;
//                 //一共多少列
//                 var col = Math.ceil(childArr.length/6);
//                 //计算一共多少列，设置对应的class样式
//                 node.find("div.children").addClass("children-col-"+col);
//                 //
//                 for(var j=0;j<childArr.length;j++){
//                     if(j%6 ==0){
//                         var newUl = $(
//                     `<ul class="children-list children-list-col-${parseInt(j/6)}">
//                         </ul>`);
//                         newUl.appendTo(node.find("div.children"));
//                     }
//                     $(`<li>
//                     <a href="#" class="link clearfix">
//                         <img src=${childArr[j].img} width="40px" height="40px" class="thumb">
//                         <span class="text">${childArr[j].title}</span>
//                     </a>
//                 </li>`).appendTo(newUl);
//                 }
//             }
//         },
//         error:function(meg){
//             console.log(msg);
//         }
//     })
// }
   



// function leftNavTab(){
//     var NavTabList = getleftNavTab();
//     $.each(NavTabList,function(index,NavTab){
//         console.log(NavTab)
//         for(var i=0;i< sideArr.length;i++){

//         }
//         $('children').children.eq(0).append(`
//         <li>
//         <a href="#" class="link clearfix">
//             <img src="${NavTab.img}" width="40px" height="40px" class="thumb">
//             <span class="text">${NavTab.text}</span>
//         </a>
//     </li>`)
//     })
// }

