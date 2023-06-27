export const handleError = (error, statusCode, response) => {
    console.log(error);
    response.status(statusCode).json({
      success: false,
      error,
      message: 'An error occured!',
      status: 'Error',
    });
  };