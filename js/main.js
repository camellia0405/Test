$(function() {
  $('.Hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.Menu').addClass('active');
      } else {
          $('.Menu').removeClass('active');
      }
  });
});


(function () {
  if ($(".js-modal-video").length) { //クラス名js-modal-videoがあれば以下を実行
    $(".js-modal-video").modalVideo({
      channel: "youtube",
      youtube: {
        rel: 0, //関連動画の指定
        autoplay: 0, //自動再生の指定
      },
    });
  }
})();

