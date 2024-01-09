export function mockGetRequest(delay, data, shouldFail, failType) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldFail ? reject('fail') : resolve(data);
    }, delay);
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return {
        type: failType,
        response: err,
      };
    });
}

function getErrorFromErrorCode(errorCode) {
  const errorCodesEnabled = true;

  if ((!errorCode || !errorCodesEnabled) && errorCode !== 0) {
    return;
  }

  switch (errorCode) {
    case 0: // General error
      return 'add localization for error messages!';
  }
}

export function getFormattedHttpReqError(error) {
  const errorFormat =
    error?.status || error?.data?.errorCode || error?.errorCode;
  const errorFromErrorCode = getErrorFromErrorCode(errorFormat);
  if (errorFromErrorCode) {
    return errorFromErrorCode;
  } else if (error?.data?.errors) {
    const errorsInfoObj = error.data.errors;
    return Object.entries(errorsInfoObj).map(
      ([key, value]) => `${key}: ${value}`
    );
  } else if (error?.data?.errors?.description) {
    return error.data.errors.description;
  } else if (error?.data?.message) {
    return error.data.message;
  } else {
    return error?.statusText || error?.toString();
  }
}
