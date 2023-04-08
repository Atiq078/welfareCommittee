import http from "../http-common";
import ActionData from "../types/action.type"

class ActionDataService {
  getAll() {
    return http.get<Array<ActionData>>("/actions");
  }

  get(id: string) {
    return http.get<ActionData>(`/actions/${id}`);
  }

  create(data: ActionData) {
    return http.post<ActionData>("/actions", data);
  }

  update(data: ActionData, id: any) {
    return http.put<any>(`/actions/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/actions/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/actions`);
  }

  findByTitle(description: string) {
    return http.get<Array<ActionData>>(`/actions?description=${description}`);
  }

  findByUserID(id: string) {
    return http.get<Array<ActionData>>(`/actions?id=${id}`);
  }
}

export default new ActionDataService();