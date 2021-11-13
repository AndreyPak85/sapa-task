import { instance } from './axios';

export const valuesApi = {
  get: () => {
    try {
      return instance('/values/1');
    } catch (error) {
      throw error;
    }
  },
  update: (body: any) => {
    try {
      return instance.put('/values/1', { ...body });
    } catch (error) {
      throw error;
    }
  },
};
