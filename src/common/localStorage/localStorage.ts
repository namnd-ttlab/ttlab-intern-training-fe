import { isJson } from "@common/commonFunctions";

export class LocalStorage {
  get(key: string): string {
    if (!localStorage) {
      return "";
    }
    return localStorage.getItem(key) || "";
  }

  set(key: string, value: string): void {
    if (!localStorage) {
      return;
    }
    localStorage.setItem(key, value);
  }

  getObjectFromKey<T>(key: string): T | Record<string, unknown> {
    const jsonString = this.get(key);
    if (isJson(jsonString)) {
      return JSON.parse(jsonString) as T;
    }
    return {};
  }
}

export const storage = new LocalStorage();
