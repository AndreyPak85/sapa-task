import { useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router';

export const Notifier = () => {
  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const notifications = useSelector(
    (state: RootStateOrAny) => state.notifier.notifications
  );

  useEffect(() => {
    notifications.forEach((notification: any) => {
      enqueueSnackbar(notification.message, {
        variant: notification.variant,
      });
      if (notification.redirect) {
        history.push(notification.redirect);
      }
    });
  }, [notifications]);

  return null;
};
