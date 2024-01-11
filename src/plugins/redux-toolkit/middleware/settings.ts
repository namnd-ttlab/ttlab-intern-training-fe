import { storage } from '@common/localStorage/localStorage';
import { setCurrentLanguage } from '@common/reducers/app.reducer';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import i18next from '@plugins/i18next/i18n';

export const settingListenerMiddleware = createListenerMiddleware();

settingListenerMiddleware.startListening({
    actionCreator: setCurrentLanguage,
    effect: async (action) => {
        storage.set('currentLanguage', action.payload);
        i18next.changeLanguage(action.payload);
    },
});
