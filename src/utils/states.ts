import { ContactState } from '@interfaces';

export const initContactState: Omit<ContactState, 'date'> = {
  name: '',
  mail: '',
  message: '',
};
