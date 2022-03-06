import { GiraffeqlBaseError } from "giraffeql";

export class PermissionsError extends GiraffeqlBaseError {
  constructor(params: { message?: string; fieldPath?: string[] }) {
    const { message = "Insufficient permissions", fieldPath = [] } = params;
    super({
      errorName: "PermissionsError",
      message,
      fieldPath,
      statusCode: 401,
    });
  }
}

export class TimeoutError extends GiraffeqlBaseError {
  constructor(params: { message?: string; fieldPath?: string[] }) {
    const { message = "Request timed out", fieldPath = [] } = params;
    super({
      errorName: "TimeoutError",
      message,
      fieldPath,
      statusCode: 500,
    });
  }
}

export function generateError(
  message: string,
  fieldPath: string[],
  statusCode = 400
): GiraffeqlBaseError {
  return new GiraffeqlBaseError({
    message,
    fieldPath,
    statusCode,
  });
}

export function itemNotFoundError(fieldPath: string[]): GiraffeqlBaseError {
  return generateError("Record was not found", fieldPath, 404);
}

export function generatePermissionsError(
  fieldPath?: string[],
  message?: string
): PermissionsError {
  return new PermissionsError({
    message,
    fieldPath,
  });
}

export function generateTimeoutError(
  fieldPath?: string[],
  message?: string
): TimeoutError {
  return new TimeoutError({
    message,
    fieldPath,
  });
}
