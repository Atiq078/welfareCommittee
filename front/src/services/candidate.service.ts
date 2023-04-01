import http from "../http-common";
import ICandidateData from "../types/candidate.type"

class CandidateDataService {
  getAll() {
    return http.get<Array<ICandidateData>>("/candidates");
  }

  get(id: string) {
    return http.get<ICandidateData>(`/candidates/${id}`);
  }

  create(data: ICandidateData) {
    return http.post<ICandidateData>("/candidates", data);
  }

  update(data: ICandidateData, id: any) {
    return http.put<any>(`/candidates/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/candidates/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/candidates`);
  }

  findByTitle(name: string) {
    return http.get<Array<ICandidateData>>(`/candidates?name=${name}`);
  }
}

export default new CandidateDataService();