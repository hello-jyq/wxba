
<template>
<div>
    <div class="wrapper">
        <div class="topHead spaceBetween">
            <a class="topClose">
                <img src="../images/topclose.png" />
            </a>
            <div class="topTitle">智慧公安</div>
            <div class="topClose"></div>
        </div>
        <div class="content whiteBg">
            <div class="adminOperation">
                <div class="postPush">推送</div>
                <div class="postRoofPlacement">置顶</div>
                <div class="postSink">沉贴</div>
                <div class="postDelete">删除</div>
            </div>
            <header class="postTit">惠民服务之：人民警察家园团队拓展活动【第九期】</header>
            <div class="senderInfor spaceBetween">
                <div class="inforLeft">
                    张三四<span class="department">金山分局/反恐支队</span>
                </div>
                <div class="inforRight"><img src="../images/eyes.png" />阅读量&nbsp;280</div>
            </div>
            <div class="senderDate">2019-10-24</div>
            <div class="sendContent">
                <img src="../images/post1.png" />
                <p>按照市委“不忘初心、牢记使命”主题教育安排，10月22日上午，副市长、公安局长毛建国以“为丽水高质量绿色发展扛起公安担当”为主题，给市局民警上了一堂专题党课。市委“不忘初心、牢记使命”主题教育第七巡回指导组组长邢长勇参加。
                    <br /><br />毛建国在党课中指出，开展“不忘初心、牢记使命”主题教育是以习近平同志为核心的党中央统揽伟大斗争、伟大工程、伟大事业、伟大梦想作出的重大部署，对统筹推进“五位一体”总体布局、协调推进“四个全面”战略布局，决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利、实现中华民族伟大复兴的中国梦，具有重大而深远的意义。
                </p>
            </div>
            <div class="interaction spaceBetween">
                <div class="followCont center"><span class="followIcon"></span>关注</div>
                <div class="thumbsCont center"><span class="thumbsIcon"></span>266</div>
            </div>
        </div>
        <div class="commentTheme">
            <div class="spaceBetween">
                <div class="totalComment">39条评论</div>
                <div class="sortByTime center">按时间正序&nbsp;<span class="sortIcon"></span></div>
                <div class="sortByTimeRotate center" style="display: none;">按时间倒序&nbsp;<span
                        class="sortIcon rotate"></span>
                </div>
            </div>
            <div class="commentList">
                <div class="commentTit">
                    <div class="listTop"><img src="../images/head.png" /></div>
                    <div class="listBottom">
                        <div>张三四<span class="department">金山分局/反恐支队</span></div>
                        <div class="fooller">
                            <div class="commentDate left">第1楼 · 09-18</div>
                            <div class="thumbsCont right"><span class="thumbsIcon"></span>266</div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="commentText">参考答案：我想其实这个提案的部分是非常有创意，可是这个计划来得及吗？预算足够吗？消费者可以接受吗？还有是我们的关注点。</div>
                        <a href="commentList.html" class="viewReply">查看3条回复<span></span></a>
                    </div>
                </div>
            </div>
            <div class="commentList">
                <div class="commentTit">
                    <div class="listTop"><img src="../images/head.png" /></div>
                    <div class="listBottom">
                        <div>王二小<span class="department">宝山分局/反恐支队</span></div>
                        <div class="fooller">
                            <div class="commentDate left">第2楼 · 10-24</div>
                            <div class="thumbsCont right"><span class="thumbsIcon"></span>266</div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="commentText">参考答案：我想其实这个提案的部分是非常有创意，可这个计划来得及吗？预算足够吗？消费者可以接受吗？还是我们的关注点。</div>
                    </div>
                </div>
            </div>
            <div class="commentList">
                <div class="commentTit">
                    <div class="listTop"><img src="../images/head.png" /></div>
                    <div class="listBottom">
                        <div>张思欣<span class="department">嘉定分局/反恐支队</span></div>
                        <div class="fooller">
                            <div class="commentDate left">第3楼 · 10-25</div>
                            <div class="thumbsCont right"><span class="thumbsIcon"></span>266</div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="commentText">参考答案：我想其实这个提案的部分是非常有创意，可是这个计划来得及吗？预算足够吗？消费者可以接受吗？还有是我们的关注点。</div>
                        <a href="commentList.html" class="viewReply">查看2条回复<span></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="writeComments spaceBetween">
        <input type="text" placeholder="输入你想说的话…" />
        <div class="send center"><span></span>发送</div>
    </div>
    </div>
    </template>
    <script>
$(function () {
  $(".sortByTime").click(function () {
    $(this).hide();
    $(".sortByTimeRotate").show();
  })
  $(".sortByTimeRotate").click(function () {
    $(this).hide();
    $(".sortByTime").show();
  })
  $(".followCont").click(function () {
    $(this).find(".followIcon").toggleClass("followedIcon");
  })
  $(".thumbsCont").click(function () {
    $(this).find(".thumbsIcon").toggleClass("thumbsedIcon");
  })
})
    </script>
</body>

</html>