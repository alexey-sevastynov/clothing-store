import { createEffect } from 'effector';
import api from './apiInstance';
import toast from 'react-hot-toast';
import { onAuthSuccess } from '@/lib/utils/auth';
import { ISignUpFx } from '@/types/authPopup';

export const singUpFx = createEffect(
  async ({ name, password, email }: ISignUpFx) => {
    const { data } = await api.post('/api/users/sign-up', {
      name,
      password,
      email,
    });

    if (data.warningMessage) {
      toast.error(data.warningMessage);
      return;
    }

    onAuthSuccess('Authentication was successful', data);
    return data;
  }
);

export const singInFx = createEffect(async ({ email, password }: ISignUpFx) => {
  const { data } = await api.post('/api/users/login', { email, password });

  if (data.warningMessage) {
    toast.error(data.warningMessage);
    return;
  }

  onAuthSuccess('Entry was successful', data);
  return data;
});
