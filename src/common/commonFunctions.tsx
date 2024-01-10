/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { uniq } from "lodash";
import isPlainObject from "lodash/isPlainObject";
import mapKeys from "lodash/mapKeys";
import trim from "lodash/trim";
import i18next from "@plugins/i18next/i18n";

export function isJson(str: string): boolean {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function isStringify<T>(obj: T | Record<string, unknown>): boolean {
  try {
    JSON.stringify(obj);
  } catch (e) {
    return false;
  }
  return true;
}

export function trimData(body: any): void {
  const trimValue = (item: any) => {
    mapKeys(item, (value, key) => {
      // trim string value
      if (typeof value === "string") {
        item[key] = trim(value);
      }

      // iterate array
      else if (Array.isArray(value)) {
        value.forEach((subValue, index) => {
          // trim string value
          if (typeof subValue === "string" && !trim(subValue as string)) {
            value[index] = trim(subValue);
          } else if (isPlainObject(subValue)) {
            trimValue(subValue);
          }
        });
      } else if (isPlainObject(value)) {
        trimValue(value);
      }
    });
  };

  trimValue(body);
}

export const downloadFile = async (
  fileName: string,
  url: string
): Promise<void> => {
  const res = await axios.get(url, {
    responseType: "arraybuffer",
  });
  const blob = new Blob([res.data], { type: "text" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const validateUniqueValue = (items: any[], key: string): number[] => {
  const duplicatedItems: number[] = [];
  for (let index = 0; index < items.length - 1; index += 1) {
    const item = items[index];
    const restItems = items.slice(index + 1);
    const duplicatedIndex = restItems.findIndex(
      (it) => it[key] && item[key] && it[key] === item[key]
    );
    if (duplicatedIndex > -1) {
      duplicatedItems.push(index);
      duplicatedItems.push(index + duplicatedIndex + 1);
    }
  }
  return uniq(duplicatedItems);
};

export function parseErrorMessage(message: string): string {
  const [tx, data] = message.split("|");
  if (!data) {
    return i18next.t(tx);
  }
  const dataParsed = isJson(data) ? JSON.parse(data) : {};
  const pathArray = dataParsed.path.split(".");
  dataParsed.path = /\./.test(dataParsed.path)
    ? pathArray[pathArray.length - 1]
    : dataParsed.path;
  return i18next.t(tx, dataParsed) as string;
}

export const compareFormData = (formData: any, originalData: any): boolean => {
  return JSON.stringify(formData) === JSON.stringify(originalData);
};

export const formatMoney = function (
  price: number,
  n = 0,
  x = 3,
  s = ",",
  c = "."
) {
  if (!price) return 0;
  const re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\D" : "$") + ")",
    num = price.toFixed(Math.max(0, ~~n));

  return (c ? num.replace(".", c) : num).replace(
    new RegExp(re, "g"),
    "$&" + (s || ",")
  );
};
