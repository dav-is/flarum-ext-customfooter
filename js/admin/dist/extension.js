'use strict';

System.register('Davis/CustomFooter/components/CustomFooterSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  var SettingsModal, CustomFooterSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      CustomFooterSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(CustomFooterSettingsModal, _SettingsModal);

        function CustomFooterSettingsModal() {
          babelHelpers.classCallCheck(this, CustomFooterSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(CustomFooterSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(CustomFooterSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'CustomFooterSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('davis-customfooter.admin.settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('davis-customfooter.admin.settings.customtext')
              ),
              m('textarea', { rows: '10', required: true, className: 'FormControl', type: 'text', bidi: this.setting('davis-customfooter.customtext') }),
              m(
                'label',
                null,
                app.translator.trans('davis-customfooter.admin.settings.heightofheader')
              ),
              m('input', { required: true, className: 'FormControl', type: 'number', bidi: this.setting('davis-customfooter.heightofheader') }),
              m(
                'label',
                null,
                app.translator.trans('davis-customfooter.admin.settings.cssofheader')
              ),
              m('textarea', { rows: '10', className: 'FormControl', type: 'text', bidi: this.setting('davis-customfooter.cssofheader') }),
              m(
                'label',
                null,
                app.translator.trans('davis-customfooter.admin.settings.jsofheader')
              ),
              m('textarea', { rows: '10', className: 'FormControl', type: 'text', bidi: this.setting('davis-customfooter.jsofheader') })
            )];
          }
        }]);
        return CustomFooterSettingsModal;
      }(SettingsModal);

      _export('default', CustomFooterSettingsModal);
    }
  };
});;
'use strict';

System.register('Davis/CustomFooter/main', ['flarum/app', 'flarum/extend', 'flarum/components/PermissionGrid', 'Davis/CustomFooter/components/CustomFooterSettingsModal'], function (_export, _context) {
  var app, extend, PermissionGrid, CustomFooterSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsPermissionGrid) {
      PermissionGrid = _flarumComponentsPermissionGrid.default;
    }, function (_DavisCustomFooterComponentsCustomFooterSettingsModal) {
      CustomFooterSettingsModal = _DavisCustomFooterComponentsCustomFooterSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('Davis-customfooter', function () {
        app.extensionSettings['davis-customfooter'] = function () {
          return app.modal.show(new CustomFooterSettingsModal());
        };
      });
    }
  };
});