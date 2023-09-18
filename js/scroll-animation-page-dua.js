var setSkrollr = function($el, data) {
    for (var i = 0, l = data.length; i < l; i++) {
        var d = data[i],
            px = d[0];
            css = d[1];
        $el.attr('data-' + px, css);
    }
}

var playing = false;
var playingg = false;
var audioElm = $('#musik_1').get(0);
var audioElmm = $('#musik_2').get(0);

jQuery(function($) {
    setSkrollr($('#judul'), [[0, 'visibility: visible'], [100, 'visibility: hidden']]);
    setSkrollr($('#text_1'), [[0, 'visibility: hidden'], [100, 'visibility: visible'], [300, 'visibility: hidden']]);
    setSkrollr($('#text_1_0'), [[0, 'visibility: hidden'], [300, 'visibility: visible'], [500, 'visibility: hidden']]);
    setSkrollr($('#text_1_0_1'), [[0, 'visibility: hidden'], [500, 'visibility: visible'], [700, 'visibility: hidden']]);
    setSkrollr($('#text_1_0_2'), [[0, 'visibility: hidden'], [700, 'visibility: visible'], [900, 'visibility: hidden']]);
    setSkrollr($('#text_1_0_3'), [[0, 'visibility: hidden'], [900, 'visibility: visible'], [1100, 'visibility: hidden']]);
    setSkrollr($('#text_1_0_4'), [[0, 'visibility: hidden'], [1100, 'visibility: visible'], [1300, 'visibility: hidden']]);
    setSkrollr($('#text_1_1'), [[0, 'visibility: hidden'], [1300, 'visibility: visible'], [1500, 'visibility: hidden']]);
    setSkrollr($('#text_2'), [[0, 'visibility: hidden'], [1500, 'visibility: visible'], [1700, 'visibility: hidden']]);
    setSkrollr($('#text_3'), [[0, 'visibility: hidden'], [1700, 'visibility: visible'], [1900, 'visibility: hidden']]);
    setSkrollr($('#text_4'), [[0, 'visibility: hidden'], [1900, 'visibility: visible'], [2100, 'visibility: hidden']]);
    setSkrollr($('#text_5'), [[0, 'visibility: hidden'], [2100, 'visibility: visible'], [2300, 'visibility: hidden']]);
    setSkrollr($('#text_6'), [[0, 'visibility: hidden'], [2300, 'visibility: visible'], [2500, 'visibility: hidden']]);
    setSkrollr($('#text_7'), [[0, 'visibility: hidden'], [2500, 'visibility: visible'], [2700, 'visibility: hidden']]);
    setSkrollr($('#text_11'), [[0, 'visibility: hidden'], [2500, 'visibility: visible'], [2700, 'visibility: hidden']]);
    setSkrollr($('#subject'), [[0, 'visibility: visible'], [100, 'visibility: hidden']]);
    setSkrollr($('#subject_yellow'), [[0, 'visibility: hidden'], 
                                        [100, 'visibility: visible'], [300, 'visibility: hidden'], 
                                        [500, 'visibility: visible'], [700, 'visibility: hidden'], 
                                        [900, 'visibility: visible'], [1100, 'visibility: hidden'], 
                                        [1300, 'visibility: visible'], [1500, 'visibility: hidden'], 
                                        [1700, 'visibility: visible'], [1900, 'visibility: hidden'], 
                                        [2100, 'visibility: visible'], [2300, 'visibility: hidden'], 
                                        [2500, 'visibility: visible'], [2700, 'visibility: hidden']]);
    setSkrollr($('#subject_brown'), [[0, 'visibility: hidden'], [300, 'visibility: visible'], 
                                        [500, 'visibility: hidden'], [700, 'visibility: visible'], 
                                        [900, 'visibility: hidden'], [1100, 'visibility: visible'], 
                                        [1300, 'visibility: hidden'], [1500, 'visibility: visible'], 
                                        [1700, 'visibility: hidden'], [1900, 'visibility: visible'], 
                                        [2100, 'visibility: hidden'], [2300, 'visibility: visible'], 
                                        [2500, 'visibility: hidden'], [2700, 'visibility: visible']]);

    skrollr.init({
        smoothScrolling: true
    });


    $(window).scroll(function() {
      var pageScroll = $(window).scrollTop();
      if(!playing && pageScroll > 100){
        audioElm.play();
        playing = true;
      }else if(!playing){
        audioElm.pause();
        playing = false;
      }
    });
});