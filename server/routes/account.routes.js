import { verify, verifyStaff, verifyAdmin } from '../middlewares/verifyToken';
import {
  createAccount,
  getOneAccount,
  getAccounts,
  toggleAccountStatus
} from '../controllers/account.controllers';

export default function(router) {
  router.route('/accounts').post(verify, createAccount);

  router.route('/accounts').get(verifyStaff, getAccounts);

  router.route('/accounts/:accNumber').get(verify, getOneAccount);

  router.route('/accounts/:accNumber').patch(verifyAdmin, toggleAccountStatus);
}
