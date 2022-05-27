import moment from 'moment';

export const formatRequestDate = (date: string = new Date().toString()) => {
  return moment(date).format('DD.MM.YYYY, HH:mm');
};
