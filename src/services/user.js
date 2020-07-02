import { stringify } from 'qs';
import request from "../utils/request";
export async function getUser(params) {
  console.log(params)
  return request(`http://127.0.0.1:3000/data?${stringify(params)}`)
}
