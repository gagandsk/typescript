import { subDays, format } from 'date-fns';

const days: number = 30;
const date = new Date(1998, 1, 28); // 0 = enero, 1 = febrero ....
const rta = subDays(date, days);
const str = format(rta, 'yyy/MM/dd');
console.group(str);
