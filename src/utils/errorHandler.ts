import { ApiError } from "@src/utils/APIError";

const errorHandler = (statusCode: number, err: Error, omitStack?: boolean) => {
  return new ApiError(
    statusCode,
    err.message || "Unable to complete request",
    omitStack
  );
};

const resourceNotFoundErrorHandler = (err: Pick<ApiError, "message">) => {
  return new ApiError(404, err.message, true);
};

export { errorHandler, resourceNotFoundErrorHandler };
