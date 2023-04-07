import http from "../http-common";
//import {ILoanLeft , ILastLoan,   IMaxInst ,   IMaxLoan ,  ILoanDuration ,  IInstPaid ,   IDueMonths ,IMinInstAmount,  ITotalBal ,  IAllMonthlyDues ,  IOverallBal,  IOverallLoan,IOverallLoanDues,} from "../types/misc.type"
import ILoanLeft0  from "../types/misc0.type"
class SqlDataService0 {

  //localhost:8080/api/sql/loanleft/?id=13&cid=1
  findLoanLeftByIdandCid(id: string,cid: string) {
    return http.get<ILoanLeft0>(`/sql/loanleft?id=${id}&cid=${cid}`);
  }
  
  /*
  findLastLoanByIdandCid(id: string,cid: string) {
    return http.get<Array<ILastLoan>>(`/sql/lastloan?id=${id}&cid=${cid}`);
  }
  
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

export default new SqlDataService0();