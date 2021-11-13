import { instance } from './axios';

export const valuesApi = {
  get: () => {
    try {
      return instance('/values/1');
    } catch (error) {
      throw error;
    }
  },
};
