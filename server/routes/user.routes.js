import {
  validateSignUpData,
  validateSignInData
} from "../middlewares/validation";
import { signUp, signIn, getAllUsers, toggleAccounttype } from "../controllers/user.controllers";
import { verify, verifyStaff, verifyAdmin } from "../middlewares/verifyToken";

export default function(router) {
  router.route("/signup").post(validateSignUpData, signUp);

  router.route("/signin").post(validateSignInData, signIn);

  router.route("/users").get(verifyStaff, getAllUsers);

  router
    .route("/users/:emailId/switchrole")
    .patch(verifyAdmin, toggleAccounttype);
}
