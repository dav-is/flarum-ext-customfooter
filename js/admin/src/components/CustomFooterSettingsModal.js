import SettingsModal from 'flarum/components/SettingsModal';

export default class CustomFooterSettingsModal extends SettingsModal {
  className() {
    return 'CustomFooterSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('davis-customfooter.admin.settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('davis-customfooter.admin.settings.customtext')}</label>
        <textarea rows="10" required className="FormControl" type="text" bidi={this.setting('davis-customfooter.customtext')}></textarea>
        <label>{app.translator.trans('davis-customfooter.admin.settings.heightofheader')}</label>
        <input required className="FormControl" type="number" bidi={this.setting('davis-customfooter.heightofheader')}></input>
        <label>{app.translator.trans('davis-customfooter.admin.settings.cssofheader')}</label>
        <textarea rows="10" className="FormControl" type="text" bidi={this.setting('davis-customfooter.cssofheader')}></textarea>
        <label>{app.translator.trans('davis-customfooter.admin.settings.jsofheader')}</label>
        <textarea rows="10" className="FormControl" type="text" bidi={this.setting('davis-customfooter.jsofheader')}></textarea>
      </div>
    ];
  }
}