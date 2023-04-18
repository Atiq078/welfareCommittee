import http from "../http-common";
import {ILoanLeft , ILastLoan,   IMaxInst ,   IMaxLoan ,  ILoanDuration ,  IInstPaid ,  
  IDueMonths ,IMinInstAmount,  ITotalBal ,  IAllMonthlyDues ,  IOverallBal,  
  IOverallLoan,IOverallLoanDues,IMembersCount} from "../types/misc.type"

class SqlDataService {

  //localhost:8080/api/sql/loanleft/?id=13&cid=1
  findLoanLeftByIdandCid(id: string,cid: string) {
    return http.get<ILoanLeft>(`/sql/loanleft?id=${id}&cid=${cid}`);
  }
  
  findLastLoanByIdandCid(id: string,cid: string) {
    return http.get<ILastLoan>(`/sql/lastloan?id=${id}&cid=${cid}`);
  }
  
  findMaxInstByCid(cid: string) {
    return http.get<IMaxInst>(`/sql/maxinst/${cid}`);
  }

  findMaxLoanByCid(cid: string) {
    return http.get<IMaxLoan>(`/sql/maxloan/${cid}`);
  }

  findLoanDurationByIdandCid(id: string,cid: string) {
    return http.get<ILoanDuration>(`/sql/loanduration?id=${id}&cid=${cid}`);
}

  findInstPaidByIdandCid(id: string,cid: string) {
    return http.get<Array<IInstPaid>>(`/sql/instpaid?id=${id}&cid=${cid}`);
  }

  findDueMonthsByIdandCid(id: string,cid: string) {
    return http.get<IDueMonths>(`/sql/duemonths?id=${id}&cid=${cid}`);
  }
  
  findMinInstAmountByIdandCid(id: string,cid: string) {
    return http.get<IMinInstAmount>(`/sql/mininstamount?id=${id}&cid=${cid}`);
  }
  //Admin
  findTotalBalByCid(cid: string) {
    return http.get<ITotalBal>(`/sql/totalbal/${cid}`);
  }

  findAllMonthlyDuesByCid(cid: string) {
    return http.get<Array<IAllMonthlyDues>>(`/sql/allmonthlydues/${cid}`);
  }

  findOverallBalByCid(cid: string) {
    return http.get<Array<IOverallBal>>(`/sql/overallbal/${cid}`);
  }

  findOverallLoanByCid(cid: string) {
    return http.get<Array<IOverallLoan>>(`/sql/overallloan/${cid}`);
  }

  findOverallLoanDuesByCid(cid: string) {
    return http.get<Array<IOverallLoanDues>>(`/sql/overallloandues/${cid}`);
  }

  findMembersCount() {
    return http.get<Array<IMembersCount>>(`/sql/memberscount/`);
  }
}

export default new SqlDataService();