import app from 'flarum/app';
import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import icon from 'flarum/helpers/icon';

app.initializers.add('davis-customfooter-forum', function() {
    extend(HeaderPrimary.prototype, 'init', function() {
        this.isopen = false;
        $('body').append('<div id="customFooter" style="position: fixed; bottom: 0; width: 100%;"><div style="position: relative;left: 93%;"><i id="footershow" style="color:#7088a9;cursor:pointer;font-size: 1.5em;" class="fa fa-info-circle"></i><i id="footerhide" style="color:#7088a9;font-size: 1.5em;cursor:pointer;display:none;" class="fa fa-caret-down"></i></div><div class="footercontent" style="display: none;height:'+app.forum.attribute("davis-customfooter.heightofheader")+'px;">'+app.forum.attribute('davis-customfooter.customtext')+'</div></div>');
        $('head').append('<style>'+app.forum.attribute("davis-customfooter.cssofheader")+'</style>');
        $('head').append('<script>'+app.forum.attribute("davis-customfooter.jsofheader")+'</script>');
        $('#footershow').click(()=>{
            $('.footercontent').slideDown('fast', ()=>{
                $('#footershow').slideUp('fast', ()=>{$('#footerhide').slideDown('fast');});
            });
            this.isopen = true;
        });
        $('#footerhide').click(()=>{
            $('.footercontent').slideUp('fast', ()=>{
                $('#footerhide').slideUp('fast', ()=>{$('#footershow').slideDown('fast');});
            });
            this.isopen = false;
        });
        $('#app').click(()=>{
            if(this.isopen) {
                $('.footercontent').slideUp('fast', ()=>{
                    $('#footerhide').slideUp('fast', ()=>{$('#footershow').slideDown('fast');});
                });
            }
        });
    });
});