/*
 * @Author: zyl omamzhange@gmail.com
 * @Date: 2024-03-13 20:05:51
 * @LastEditors: zyl omamzhange@gmail.com
 * @LastEditTime: 2024-03-13 20:45:58
 * @FilePath: /vite-antd/src/api/UserRequest.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEget
 */
import BaseRequest, { isDev } from '@/api/BaseRequest'
import Mock from '@/api/Mock'


class UserRequest extends BaseRequest {
    async getUserInfo(userId: string) {
      const url = isDev ? Mock.freeGetRecord.user : `/user/info/${userId}`;
      const data = await this.GET(url);
      return data;
    }

    async updateUserInfo(userId: string, info: object) {
      const url = isDev ? Mock.freePostRecord.user.url : ``;
      const _data = isDev ? Mock.freePostRecord.user.data : { userId, ...info };
      const data = await this.POST(url, _data);
      return data;
    }

    async getUserList() {
      const url = isDev ? Mock.freeGetList.user.url : ``;
      const data = await this.GET(url);
      return data;
    }

  
    async getUserAvatar(userId: string, formData: FormData) {
      const url = isDev ? Mock.freeGetRecord.avator : `/user/avatar/${userId}`;
      const data = await this.POST(url, formData);
      return data;
    }
    

  }
  
  export default UserRequest;