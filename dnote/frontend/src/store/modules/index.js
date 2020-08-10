import { notes } from "./ping";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { noteEpics } from "./notes";

export const rootReducers = combineReducers({ notes });
export const rootEpics = combineEpics(noteEpics.addNoteEpic);
