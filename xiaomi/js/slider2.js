slider2()
function slider2(){
    $.ajax({
        url:"../js/slider2.json",
        // dataType:"json",
        
        success:function(res){
            if(res.code===1){
                $('tbody').empty();
            }
            $each(res,function(index,img){
                $('.sj-row-right').append(`
                <div class="span16">
                <ul class="brick-list clearfix">
                    <li class="brick-item">
                        <a href="#"><img src="${index.img}" alt=""></a>
                    </li>
                    <li class="brick-item">
                        <a href="#"><img src="${index.img}" alt=""></a>
                    </li>
                    <li class="brick-item">
                        <a href="#"><img src="${index.img}" alt=""></a>
                    </li>
                    <li class="brick-item">
                        <a href="#"><img src="${index.img}" alt=""></a>
                    </li>
                    <li class="brick-item">
                        <a href="#"><img src="${index.img}" alt=""></a>
                    </li>
                    <li class="brick-item">
                        <a href="#"><img src="${index.img}" alt=""></a>
                    </li>
                    <li class="brick-item">
                        <a href="#"><img src="${index.img}" alt=""></a>
                    </li>
                    <li class="brick-item">
                        <a href="#"><img src="${index.img}" alt=""></a>
                    </li>
                </ul>
            </div>
                `)
            })
        }
    })
}