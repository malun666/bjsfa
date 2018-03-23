/**
 * md5加密（with secretkey）
 */

import md5 from 'blueimp-md5';

export const md5str = value => md5(value, 'flydragon');
