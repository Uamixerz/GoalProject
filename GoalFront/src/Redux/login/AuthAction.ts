import { Dispatch } from "react";
import { AuthActionType, AuthUserLoginActionType, IAuthResult, ILogin, IUser } from "./types";
import http_common from "../../http_common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  jwtDecode  from "jwt-decode";

export const LoginUserAction = async (dispatch: Dispatch<AuthUserLoginActionType>, model: ILogin) => {
  const result = await http_common.post<IAuthResult>("/api/auth/login", model);
  const {access_token} = result.data;
  await AsyncStorage.setItem('jwtToken', access_token);
  const decoded = jwtDecode<IUser>(access_token);
  dispatch({
    type: AuthActionType.AUTH_USER_LOGIN,
    payload: decoded
  });
}

export const SetUserAction = (dispatch: Dispatch<AuthUserLoginActionType>, access_token: string) => {
  const decoded = jwtDecode<IUser>(access_token);
  dispatch({
    type: AuthActionType.AUTH_USER_LOGIN,
    payload: decoded
  });
  // console.log('decode', decoded);
}

