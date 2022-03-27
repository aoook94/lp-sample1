//スクロールイベント
jQuery(function(){
    let scrollCount = 0;
    let showPoint = jQuery(".l-about").offset().top; //表示を切り替える位置を指定

    jQuery(window).on('scroll', function(){
        if(scrollCount > showPoint){
            jQuery('#js-totop').addClass('is-show');
            if(jQuery(this).scrollTop() < scrollCount ){
                jQuery('#js-header').removeClass('is-hidden');
            }else{
                jQuery('#js-header').addClass('is-hidden');
            }
        }else{
            jQuery('#js-totop').removeClass('is-show');
            jQuery('#js-header').removeClass('is-hidden');
        }
        scrollCount = jQuery(this).scrollTop();
    });
});

//クリックイベント
jQuery(function () {
    jQuery('#js-checked').click(function () {
        $(this).toggleClass('is-active');
    });
});

jQuery('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position
     },
      speed
    );
    return false;
});

//フォームイベント
jQuery('#js-form').on('input', function(e) {
    let name = jQuery('#name').val();
    let email = jQuery('#email').val();
    //let number = jQuery('#number').val();
    let content = jQuery('#content').val();
    let policy = jQuery('#policy').prop('checked');
    
    if(name && email && content && policy===true){
        jQuery("#js-submit").prop('disabled', false);
    }else{
        jQuery("#js-submit").prop('disabled', true);
    }
  });

//wow.js
new WOW().init();