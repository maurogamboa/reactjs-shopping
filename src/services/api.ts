import axios from "axios";

export default class CoreApi {
  get<T>(url: string) {
    return axios.get<T>(url)
  }
  post<T>(url: string, payload: any) {
    return axios.post<T>(url, payload)
  }
  put<T>(url: string, payload: any) {
    return axios.put<T>(url, payload)
  }
  delete<T>(url: string) {
    return axios.delete<T>(url)
  }
}