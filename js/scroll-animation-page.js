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
    setSkrollr($('#background'), [[0, 'transform:translateX(0%)'], [8000, 'transform:translateX(-50%)']]);
    setSkrollr($('#text_0'), [[0, 'visibility: visible'], [100, 'visibility: hidden'], [700, 'visibility: hidden']]);
    setSkrollr($('#text_1'), [[0, 'visibility: hidden'], [400, 'visibility: visible'], [700, 'visibility: hidden']]);
    setSkrollr($('#text_1_0'), [[0, 'visibility: hidden'], [800, 'visibility: visible'], [1100, 'visibility: hidden']]);
    setSkrollr($('#text_1_0_1'), [[0, 'visibility: hidden'], [1200, 'visibility: visible'], [1500, 'visibility: hidden']]);
    setSkrollr($('#text_1_0_2'), [[0, 'visibility: hidden'], [1600, 'visibility: visible'], [1900, 'visibility: hidden']]);
    setSkrollr($('#text_1_0_3'), [[0, 'visibility: hidden'], [2000, 'visibility: visible'], [2300, 'visibility: hidden']]);
    setSkrollr($('#text_1_0_4'), [[0, 'visibility: hidden'], [2400, 'visibility: visible'], [2700, 'visibility: hidden']]);
    setSkrollr($('#text_1_1'), [[0, 'visibility: hidden'], [2800, 'visibility: visible'], [3100, 'visibility: hidden']]);
    setSkrollr($('#text_2'), [[0, 'visibility: hidden'], [3200, 'visibility: visible'], [3500, 'visibility: hidden']]);
    setSkrollr($('#text_3'), [[0, 'visibility: hidden'], [3600, 'visibility: visible'], [3900, 'visibility: hidden']]);
    setSkrollr($('#text_4'), [[0, 'visibility: hidden'], [4000, 'visibility: visible'], [4300, 'visibility: hidden']]);
    setSkrollr($('#text_5'), [[0, 'visibility: hidden'], [4400, 'visibility: visible'], [4700, 'visibility: hidden']]);
    setSkrollr($('#text_6'), [[0, 'visibility: hidden'], [4800, 'visibility: visible'], [5100, 'visibility: hidden']]);
    setSkrollr($('#text_7'), [[0, 'visibility: hidden'], [5200, 'visibility: visible'], [5500, 'visibility: hidden']]);
    setSkrollr($('#text_8'), [[0, 'visibility: hidden'], [5600, 'visibility: visible'], [5900, 'visibility: hidden']]);
    setSkrollr($('#text_9'), [[0, 'visibility: hidden'], [6000, 'visibility: visible'], [6300, 'visibility: hidden']]);
    setSkrollr($('#text_10'), [[0, 'visibility: hidden'], [6400, 'visibility: visible'], [7000, 'visibility: hidden']]);
    setSkrollr($('#text_11'), [[0, 'visibility: hidden'], [7000, 'visibility: visible'], [8000, 'visibility: hidden']]);
    setSkrollr($('#awan_1'), [[0, 'transform:translateX(0%)'], [8000, 'transform:translateX(-200%)']]);
    setSkrollr($('#awan_2'), [[0, 'transform:translateX(0%)'], [8000, 'transform:translateX(-200%)']]);
    setSkrollr($('#awan_3'), [[0, 'transform:translateX(0%)'], [8000, 'transform:translateX(-200%)']]);
    setSkrollr($('#ending'), [[8500, 'transform:translateX(0%)'], [9000, 'transform:translateX(-100%)']]);

    setSkrollr($('#judul'), [[0, 'transform:translateX(0%)'], [1000, 'transform:translateX(-100%)']]);
    setSkrollr($('#subject'), [[0, 'transform:translateX(0%)'], [2800, 'transform:translateX(150%)']]);
    setSkrollr($('#subject_1'), [[2000, 'transform:translateX(100%)'], [5700, 'transform:translateX(-100%)']]);
    setSkrollr($('#subject_2'), [[3900, 'transform:translateX(100%)'], [7200, 'transform:translateX(-100%)']]);
    setSkrollr($('#subject_3'), [[5800, 'transform:translateX(100%)'], [8000, 'transform:translateX(-100%)']]);

   
    setSkrollr($('#subject_4'), [[0, 'transform:translateX(0%)'], [1000, 'transform:translateX(-100%)']]);

    skrollr.init({
        smoothScrolling: true
    });


    $(window).scroll(function() {
      var pageScroll = $(window).scrollTop();
      if(!playing && pageScroll > 5 && pageScroll < 1600){
        audioElm.play();
        audioElmm.pause();
        playing = true;
        playingg = false;
      }else if(!playingg && pageScroll > 1600 ){
        audioElm.pause();
        audioElmm.play();
        playing = false;
        playingg = true;
      }
    });


});