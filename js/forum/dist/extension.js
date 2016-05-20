'use strict';

System.register('Davis/CustomFooter/main', ['flarum/app', 'flarum/extend', 'flarum/components/HeaderPrimary', 'flarum/helpers/icon'], function (_export, _context) {
    var app, extend, HeaderPrimary, icon;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsHeaderPrimary) {
            HeaderPrimary = _flarumComponentsHeaderPrimary.default;
        }, function (_flarumHelpersIcon) {
            icon = _flarumHelpersIcon.default;
        }],
        execute: function () {

            app.initializers.add('davis-customfooter-forum', function () {
                extend(HeaderPrimary.prototype, 'init', function () {
                    var _this = this;

                    this.isopen = false;
                    $('body').append('<div id="customFooter" style="position: fixed; bottom: 0; width: 100%;"><div style="position: relative;left: 93%;"><i id="footershow" style="color:#7088a9;cursor:pointer;font-size: 1.5em;" class="fa fa-info-circle"></i><i id="footerhide" style="color:#7088a9;font-size: 1.5em;cursor:pointer;display:none;" class="fa fa-caret-down"></i></div><div class="footercontent" style="display: none;height:' + app.forum.attribute("davis-customfooter.heightofheader") + 'px;">' + app.forum.attribute('davis-customfooter.customtext') + '</div></div>');
                    $('head').append('<style>' + app.forum.attribute("davis-customfooter.cssofheader") + '</style>');
                    $('head').append('<script>' + app.forum.attribute("davis-customfooter.jsofheader") + '</script>');
                    $('#footershow').click(function () {
                        $('.footercontent').slideDown('fast', function () {
                            $('#footershow').slideUp('fast', function () {
                                $('#footerhide').slideDown('fast');
                            });
                        });
                        _this.isopen = true;
                    });
                    $('#footerhide').click(function () {
                        $('.footercontent').slideUp('fast', function () {
                            $('#footerhide').slideUp('fast', function () {
                                $('#footershow').slideDown('fast');
                            });
                        });
                        _this.isopen = false;
                    });
                    $('#app').click(function () {
                        if (_this.isopen) {
                            $('.footercontent').slideUp('fast', function () {
                                $('#footerhide').slideUp('fast', function () {
                                    $('#footershow').slideDown('fast');
                                });
                            });
                        }
                    });
                });
            });
        }
    };
});