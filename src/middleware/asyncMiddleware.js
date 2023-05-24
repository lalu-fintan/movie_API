module.exports = (handler) => {
  return (req, res, next) => {
    try {
      handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
};

// this one is to avoid to use the try catch on our function,so we create one custom handler for that.

// alternatively we have one middleware in express asyncHandler,  it Do tha same thing like above the code,we can use that one also (npm i express-async-handler)
