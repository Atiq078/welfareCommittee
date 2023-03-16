import http from "../http-common";
import ITutorialData from "../types/tutorial.type"

class TutorialDataService {
  getAll() {
    //return http.get<Array<ITutorialData>>("/tutorials");
    return http.get<Array<ITutorialData>>("/candidates");
  }

  get(id: string) {
    return http.get<ITutorialData>(`/candidates/${id}`);
  }

  create(data: ITutorialData) {
    return http.post<ITutorialData>("/candidates", data);
  }

  update(data: ITutorialData, id: any) {
    return http.put<any>(`/candidates/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/candidates/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/candidates`);
  }

  findByTitle(name: string) {
    return http.get<Array<ITutorialData>>(`/candidates?name=${name}`);
  }
}

export default new TutorialDataService();