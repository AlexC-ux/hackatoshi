import { IQuestionResponse } from "./question-response";

export type IQuestion = {
  from: "user";
  text: string;
};

export type IResponse = {
  from: "server";
  text: string;
  actions?: IQuestionResponse[];
};

export type IMessage = IQuestion | IResponse;
