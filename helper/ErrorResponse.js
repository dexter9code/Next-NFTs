const errorResponse = function (res, statusCode, message) {
  return res.status(statusCode).json({
    status: statusCode === 400 || 500 ? "Error" : `Success`,
    message,
  });
};

export default errorResponse;
