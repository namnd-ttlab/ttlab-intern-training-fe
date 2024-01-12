import mitt, { Emitter } from "mitt";
import { AppEvent } from "./constants";
export * from "./constants";

type EmitterEvent = {
  [AppEvent.LOGOUT]: void;
  [AppEvent.FORBIDDEN]: void;
};

export type CustomEmitter = Emitter<EmitterEvent>;

export const emitter: CustomEmitter = mitt<EmitterEvent>();
