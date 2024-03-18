/*
 * @Author: zyl omamzhange@gmail.com
 * @Date: 2024-03-12 21:36:15
 * @LastEditors: zyl omamzhange@gmail.com
 * @LastEditTime: 2024-03-13 20:41:36
 * @FilePath: /vite-antd/src/api/BaseRequest.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
export const isDev = true;

class BaseRequest {
    private axiosInstance;
  
    constructor() {
      this.axiosInstance = axios.create({
        baseURL: "http://localhost:3000", // 后端接口地址
        timeout: 10000, // 请求超时时间
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
    }
  
    async GET(url: string, params?: any) {
      return await this.request("GET", url, params);
    }
  
    async POST(url: string, data: any) {
      return await this.request("POST", url, data);
    }
  
    async PUT(url: string, data: any) {
      return await this.request("PUT", url, data);
    }
  
    async DELETE(url: string, params?: any) {
      return await this.request("DELETE", url, params);
    }
  
    async request(method: string, url: string, data: any) {
      try {
        const response = await this.axiosInstance.request({
          method,
          url,
          data,
        });
        const res = response.data;
        return res;
      } catch (error) {
        console.error("request error:", error);
        throw error;
      }
    }
  }
  
  export default BaseRequest;