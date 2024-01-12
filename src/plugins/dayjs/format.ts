import { PluginFunc } from 'dayjs';

declare module 'dayjs' {
  interface Dayjs {
    fmYYYYMMDD(separator?: string): string;
    fmYYYYMMDDHHmmss(separator?: string): string;
    fmYYYYMMMDDHHmmss(separator?: string): string;
    fmYYYYMMDDHHmm(separator?: string): string;
    fmHHmm(separator?: string): string;
    fmHHmmss(separator?: string): string;
    fmYYYYMMDDHHmmssZ(separator?: string): string;
    fmYYYYMMDDHHmmZ(separator?: string): string;
    fmMMMDDYYYY(): string;
    fmYYYYMMDDHHmmss(separator?: string): string;
    fmYYYYMMDDTHHmmss(separator?: string): string;
    fmYYYYMMDDTHHmmssZ(separator?: string): string;
    fmYYYYMMMDD(separator?: string): string;
    fmDDMMYYYY(separator?: string): string;
  }
}

export const displayPlugin: PluginFunc = (_, dayjsClass) => {
  dayjsClass.prototype.fmYYYYMMDD = function (separator = '-') {
    return this.format(`YYYY${separator}MM${separator}DD`);
  };
  dayjsClass.prototype.fmDDMMYYYY = function (separator = '-') {
    return this.format(`DD${separator}MM${separator}YYYY`);
  };

  dayjsClass.prototype.fmYYYYMMDDHHmmss = function (separator = '-') {
    return this.format(`YYYY${separator}MM${separator}DD HH:mm:ss`);
  };
  dayjsClass.prototype.fmYYYYMMMDDHHmmss = function (separator = '-') {
    return this.format(`YYYY${separator}MMM${separator}DD HH:mm:ss`);
  };
  dayjsClass.prototype.fmYYYYMMDDTHHmmss = function (separator = '-') {
    return this.format(`YYYY${separator}MM${separator}DDTHH:mm:ss`);
  };

  dayjsClass.prototype.fmYYYYMMDDHHmmssZ = function (separator = '-') {
    return this.format(`YYYY${separator}MM${separator}DD HH:mm:ssZ`);
  };
  dayjsClass.prototype.fmYYYYMMDDTHHmmssZ = function (separator = '-') {
    return this.format(`YYYY${separator}MM${separator}DDTHH:mm:ssZ`);
  };

  dayjsClass.prototype.fmYYYYMMDDHHmmZ = function (separator = '-') {
    return this.format(`YYYY${separator}MM${separator}DD HH:mmZ`);
  };

  dayjsClass.prototype.fmYYYYMMDDHHmm = function (separator = '-') {
    return this.format(`YYYY${separator}MM${separator}DD HH:mm`);
  };

  dayjsClass.prototype.fmHHmm = function (separator = ':') {
    return this.format(`HH${separator}mm`);
  };
  dayjsClass.prototype.fmHHmmss = function (separator = ':') {
    return this.format(`HH${separator}mm${separator}ss`);
  };
  dayjsClass.prototype.fmMMMDDYYYY = function () {
    return this.format('MMM DD, YYYY');
  };

  dayjsClass.prototype.fmYYYYMMMDD = function (separator = '-') {
    return this.format(`YYYY${separator}MMM${separator}DD`);
  };
};
