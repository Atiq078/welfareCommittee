import http from "../http-common";
import IUserRoleData from "../types/userrole.type"

class UserRoleDataService {
  getAll() {
    return http.get<Array<IUserRoleData>>("/userroles");
  }

  get(userId: string) {
    return http.get<IUserRoleData>(`/userroles/${userId}`);
  }

  create(data: IUserRoleData) {
    return http.post<IUserRoleData>("/userroles", data);
  }

  update(data: IUserRoleData, userId: any) {
    return http.put<any>(`/userroles/${userId}`, data);
  }

  delete(userId: any) {
    return http.delete<any>(`/userroles/${userId}`);
  }

  deleteAll() {
    return http.delete<any>(`/userroles`);
  }


}

export default new UserRoleDataService();