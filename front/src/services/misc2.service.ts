import http from "../http-common";
//import {ILoanLeft , ILastLoan,   IMaxInst ,   IMaxLoan ,  ILoanDuration ,  IInstPaid ,   IDueMonths ,IMinInstAmount,  ITotalBal ,  IAllMonthlyDues ,  IOverallBal,  IOverallLoan,IOverallLoanDues,} from "../types/misc.type"
import ILastLoan  from "../types/misc1.type"
import ILastLoan2  from "../types/misc2.type"
class SqlDataService2 {

  //localhost:8080/api/candidates?name=sajjad
  //findByTitle(name: string) {
  //  return http.get<Array<ICandidateData>>(`/candidates?name=${name}`);
  //}


//localhost:8080/api/sql/lastloan/?id=13&cid=1
  //findLastLoanByIdandCid(id: string,cid: string) {
  //  return http.get<ILastLoan>(`/sql/lastloan?id=${id}&cid=${cid}`);
  //}
  findLastLoan2ByIdandCid(id: string,cid: string) {
    //localhost:8080/api/sql/lastloan/13
    return http.get<ILastLoan2>(`/sql/lastloan/${id}`);
  }
  findLastLoanByIdandCid(id: string,cid: string) {
    return http.get<ILastLoan>(`/candidates/${id}`);
  }
     /*
  findMaxInstByCid(cid: string) {
    return http.get<IMaxInst>(`/sql/maxinst/${cid}`);
  }

  findMaxLoanByCid(cid: string) {
    return http.get<IMaxLoan>(`/sql/maxloan/${cid}`);
  }

  findLoanDurationByIdandCid(id: string,cid: string) {
    return http.get<Array<ILoanDuration>>(`/sql/loanduration?id=${id}&cid=${cid}`);
}

  findInstPaidByIdandCid(id: string,cid: string) {
    return http.get<Array<IInstPaid>>(`/sql/instpaid?id=${id}&cid=${cid}`);
  }

  findDueMonthsByIdandCid(id: string,cid: string) {
    return http.get<Array<IDueMonths>>(`/sql/duemonths?id=${id}&cid=${cid}`);
  }
  
  findMinInstAmountByIdandCid(id: string,cid: string) {
    return http.get<Array<IMinInstAmount>>(`/sql/mininstamount?id=${id}&cid=${cid}`);
  }
  
  findTotalBalByCid(cid: string) {
    return http.get<ITotalBal>(`/sql/totalbal/${cid}`);
  }

  findAllMonthlyDuesByCid(cid: string) {
    return http.get<IAllMonthlyDues>(`/sql/allmonthlydues/${cid}`);
  }

  findOverallBalByCid(cid: string) {
    return http.get<IOverallBal>(`/sql/overallbal/${cid}`);
  }

  findOverallLoanByCid(cid: string) {
    return http.get<IOverallLoan>(`/sql/overallloan/${cid}`);
  }

  findOverallLoanDuesByCid(cid: string) {
    return http.get<IOverallLoanDues>(`/sql/overallloandues/${cid}`);
  }
*/
}

export default new SqlDataService2();