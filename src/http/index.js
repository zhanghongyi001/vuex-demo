import axios from 'axios';
import "vuex"

// import store from '../modules/app/app.js';
// if (store?.state) {
//   console.log(store.state.page.ticket, '-----store-----')
// }
const progressUrl = 'http://assembily-device-cloud-1.test.fnwintranet.com/'
if (window.location.href.includes('change-shiftspre.fanneng.com')) {
  progressUrl = 'http://assembily-device-cloud-1.test.fnwintranet.com/'
} else if (window.location.href.includes('change-shifts.fanneng.com')) {
  progressUrl = 'https://assembily-device-cloud.fanneng.com'
} else {

}
export {
  progressUrl
}
const url = "";


