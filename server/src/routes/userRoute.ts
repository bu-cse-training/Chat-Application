import express from 'express';
import controller from '../controllers/userController';
// import refreshTokenController from '../controllers/refreshTokenController';
// import verifyJWT from '../middleware/authMiddleware'

const router = express.Router();

router.post('/login', controller.readUser);
router.post('/register', controller.createUser);
router.post('/setAvatar/:id',controller.setAvatar);
router.get("/allusers/:id", controller.readAll);
router.get("/logout/:id", controller.logOut);
router.put("/resetpassword/:resetToken", controller.resetPassword);
router.post("/forgetpassword", controller.forgetPassword);
router.post("/googleSignUp", controller.googleRegistration);
router.post("/googleLogIn", controller.googleLogIn);
// router.get('/', refreshTokenController.handleRefreshToken);

export default router;
