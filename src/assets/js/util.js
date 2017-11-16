import moment from 'moment'
export const formateTimeString = (strTime) => {
	return moment.locale(strTime, "YYYYMMDDHHmmSS").fromNow();
}