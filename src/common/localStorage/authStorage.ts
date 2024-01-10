import { storage } from "./localStorage";
import { LOCAL_STORAGE_KEY } from "../constants";
import { ILoginUser } from "@common/interfaces";
import { isStringify } from "@common/commonFunctions";

class LocalStorageAuthService {
  // LOGIN USER
  setUser(user: null | ILoginUser): void {
    if (!user) {
      storage.set(LOCAL_STORAGE_KEY.LOGIN_USER, "");
    }
    if (!isStringify(user)) {
      return;
    }
    storage.set(LOCAL_STORAGE_KEY.LOGIN_USER, JSON.stringify(user));
  }
  getUser(): ILoginUser {
    return storage.getObjectFromKey(LOCAL_STORAGE_KEY.LOGIN_USER) as ILoginUser;
  }

  resetAll(): void {
    this.setUser(null);
  }
}

const localStorageAuthService = new LocalStorageAuthService();
export default localStorageAuthService;
