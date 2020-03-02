import { verify, verifyStaff, verifyAdmin } from "../middlewares/verifyToken";
import {
  createAccount,
  getOneAccount,
  getAccounts,
  toggleAccountStatus,
  deleteOneAccount
} from "../controllers/account.controllers";

export default function(router) {
  router.route("/accounts").post(verify, createAccount);

  router.route("/accounts").get(verifyStaff, getAccounts);

  router.route("/accounts/:accNumber").get(verify, getOneAccount);

  router.route("/accounts/:accNumber").patch(verifyAdmin, toggleAccountStatus);

  router.route("/accounts/:accNumber").delete(verifyStaff, deleteOneAccount);
}
