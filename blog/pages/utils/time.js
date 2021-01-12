const getDateTime = (val)=>{
   let time = new Date(val)
   let date = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
   return date
}
export default {getDateTime}