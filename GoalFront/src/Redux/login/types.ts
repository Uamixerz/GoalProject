export interface ILogin
{
  email: string;
  password: string;
}

export interface IRegister
{
  firstName: string;
  lastName: string;
  imageBase64: string;
  email: string;
  password: string;
}

export interface IAuthResult
{
  access_token: string
}

export interface IUser {
  email: string,
  description: string | null,
  nickname: string,
  name: string | null
}
//інформація про користувача в Redux
export interface IAuthReducer {
  user: IUser|null,
  isAuth: boolean
}

export enum AuthActionType {
  AUTH_USER_LOGIN = "AUTH_USER_LOGIN",
  AUTH_USER_REGISTER = "AUTH_USER_REGISTER",
  AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT"
}

//Подія входу у систему
export interface AuthUserLoginActionType {
  type: AuthActionType.AUTH_USER_LOGIN,
  payload: IUser
}

//Подія реєстрації у системі
export interface AuthUserRegisterActionType {
  type: AuthActionType.AUTH_USER_REGISTER,
  payload: IUser
}

export interface AuthUserLogoutActionType {
  type: AuthActionType.AUTH_USER_LOGOUT
}

export type AuthActions = AuthUserLoginActionType | AuthUserRegisterActionType | AuthUserLogoutActionType;
