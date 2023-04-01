import http from "../http-common";
import ProtokollData from "../types/protokoll.type"

class ProtokollDataService {
  getAll() {
    return http.get<Array<ProtokollData>>("/protokolls");
  }

  get(id: string) {
    return http.get<ProtokollData>(`/protokolls/${id}`);
  }

  create(data: ProtokollData) {
    return http.post<ProtokollData>("/protokolls", data);
  }

  update(data: ProtokollData, id: any) {
    return http.put<any>(`/protokolls/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/protokolls/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/protokolls`);
  }

  findByTitle(kommentar: string) {
    return http.get<Array<ProtokollData>>(`/protokolls?kommentar=${kommentar}`);
  }

  findByUserID(userid: string) {
    return http.get<Array<ProtokollData>>(`/protokolls?userid=${userid}`);
  }
}

export default new ProtokollDataService();