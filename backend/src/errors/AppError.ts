class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, stausCode = 400) {
    this.message = message;
    this.statusCode = stausCode;
  }
}

export default AppError;
