
export interface ILoanLeft {
  loan_left: string,
}
export interface ILastLoan {
    timestamp: string,
    loan: string,
    kommentar: string,
}

export interface IMaxInst {
    maxinst: string,
}

export interface IMaxLoan {
    loan: string,
    maxinst: string,
}

export interface ILoanDuration {
    loan_start: string,
    loan_end: string,
}

export interface IInstPaid {
    id:string;
    timestamp: string,
    installment: string,
    kommentar: string,
}

export interface IDueMonths {
    due_months: string,
}

export interface IMinInstAmount {
    min_instal: string,
}

export interface ITotalBal {
    total_bal: string,
}

export interface IAllMonthlyDues {
    id?: any | null,
    name: string,
    current_dues: string,
}

export interface IOverallBal {
    id?: any | null,
    name: string,
    total_bal: string,
    kommentar: string,
}

export interface IOverallLoan {
    id?: any | null,
    name: string,
    total_loan: string,
    kommentar: string,
    description: string,
}

export interface IOverallLoanDues {
    id?: any | null,
    name: string,
    total_loan_left: string,
    kommentar: string,
}

export interface IMembersCount {
    active_members: string,
    inactive_members: string,

}
