export type ServiceMessage = { message: string };

type ServiceResponseErrorType =
'INVALID_DATA'
| 'UNAUTHORIZED'
| 'NOT_FOUND'
| 'CONFLICT'
| 'BAD_REQUEST'
| 'SUCCESSFUL'
| 'UNPROCESSABLE CONTENT';

export type ServiceResponseError = {
  status: 'NOT_FOUND' | 'UNAUTHORIZED' | 'INVALID_DATA',
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
