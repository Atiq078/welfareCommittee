export default interface IUser {
  id?: any | null,
  name?: string,
  hidden?: string | null,
  inactive?: string | null,
  mode?: string | null,
  phone?: string,
  address?: string,
  bankdetails?: string,
  username?: string | null,
  email?: string,
  password?: string,
  roles?: Array<string>
}