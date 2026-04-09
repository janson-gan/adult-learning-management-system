interface ApiErrorType {
  message: string;
  statusCode: number;
}

class ApiError extends Error {
  statusCode: number;
  constructor({ message, statusCode }: ApiErrorType) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ApiError;
