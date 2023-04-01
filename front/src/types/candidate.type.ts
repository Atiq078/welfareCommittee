/*export default interface ICandidateData {
  id?: any | null,
  title: string,
  description: string,
  published?: boolean,
}*/
export default interface ICandidateData {
  id?: any | null,
  name: string,
  hidden: string,
  inactive: string,
  mode: string,
  phone: string,
  address: string,
  bankdetails: string,
  email: string,
  password: string,
}