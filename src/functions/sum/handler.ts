import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import SumController from "src/controllers/sum.controller";

import schema from "./schema";

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const sum = new SumController().add(event.body.num1, event.body.num2);
  return formatJSONResponse({
    result: sum,
  });
};

export const main = middyfy(hello);
