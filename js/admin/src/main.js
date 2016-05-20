import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';
import CustomFooterSettingsModal from 'Davis/CustomFooter/components/CustomFooterSettingsModal';

app.initializers.add('Davis-customfooter', () => {
  app.extensionSettings['davis-customfooter'] = () => app.modal.show(new CustomFooterSettingsModal());
});