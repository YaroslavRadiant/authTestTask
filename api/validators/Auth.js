import validateRequest from "../utils/ValidateRequest.js";
import * as Yup from "yup";

export const signInSchema = Yup.object({
  body: Yup.object({
    userName: Yup.string()
      .required("Field required!")
      .max(25, "Maximum length - 25 characters"),
    password: Yup.string()
      .required("Field required!")
      .min(3, "Password is too short - at least 3 characters")
      .max(50, "Maximum length - 50 characters"),
  }),
});

export const signUpSchema = Yup.object({
  body: Yup.object({
    userName: Yup.string()
      .required("Field required!")
      .max(25, "Maximum length - 25 characters"),
    password: Yup.string()
      .required("Field required!")
      .min(3, "Password is too short - at least 3 characters")
      .max(50, "Maximum length - 50 characters"),
    role: Yup.number()
      .required("Field required!")
      .typeError("Value must be a number!")
      .min(1, "Minimum value - 1")
      .max(3, "Maximum value - 3"),
  }),
});

export const logoutSchema = Yup.object({
  cookies: Yup.object({
    refreshToken: Yup.string().required("Field required!"),
  }),
});

class AuthValidator {
  static async signIn(req, res, next) {
    return validateRequest(req, res, next, signInSchema);
  }

  static async signUp(req, res, next) {
    return validateRequest(req, res, next, signUpSchema);
  }

  static async logOut(req, res, next) {
    return validateRequest(req, res, next, logoutSchema);
  }

  static async refresh(req, res, next) {
    return validateRequest(req, res, next);
  }
}

export default AuthValidator;
