window.onload=function() {

    var community_imgs = document.getElementsByClassName('community_img');
    var community_img = community_imgs[0].offsetHeight;
    var community_btn = document.getElementsByClassName('community_btn')[0];
    var loading_img = document.getElementsByClassName('loading_img')[0];
    var community_container = document.getElementsByClassName('community_container')[0];
    var test = community_container.offsetHeight;
    var count = 1;

    for(var i=0; i<community_imgs.length; i++) {
        community_imgs[i].style.height = community_img+"px";
    }
    community_container.style.height = community_img+"px"

    window.onresize = function() {
        community_img = community_imgs[0].offsetHeight;
        community_container.style.height = community_img+"px"
        for(var i=0; i<community_imgs.length; i++) {
            community_imgs[i].style.height = community_img+"px";
        }
    }

    community_btn.onclick=function() {
        count++;
        if(count<4) {
            loading_img.style.display = "inline-block";
            community_btn.style.display = "none";
            var height = community_img*count;
            setTimeout(function(){
                loading_img.style.display = "none";
                community_btn.style.display = "inline-block";
                community_container.style.height = height+"px";
            },3000);
        } else {
            alert("더보기 사진이 없습니다.");
        }
    };
}
// 827