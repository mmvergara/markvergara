import { APIInteractionResponse } from "discord-api-types/v10";
import { NextApiRequest } from "next";

type httpMethods = "PUT" | "POST" | "GET" | "DELETE";
export default function allowedMethod(req: NextApiRequest, allowedMethod: httpMethods) {
  return req.method === allowedMethod;
}

export const apiError = (e: unknown) => {
  console.log(e);
  const error = e as Error & { statusCode: number };
  return {
    errData: { error: { message: error.message }, data: null },
    code: error.statusCode || 400,
  };
};

export const newError = (errorMessage: string, errorCode: number) => {
  const newErr = new Error(errorMessage);
  //@ts-ignore
  newErr.statusCode = errorCode || 500;
  return newErr;
};

export const EmbedFailedResponse = (message?: string): APIInteractionResponse => {
  return {
    type: 4,
    data: {
      embeds: [
        {
          title: `Error occured`,
          description: message || "",
          color: 0xd93321,
        },
      ],
    },
  };
};
