// const asynHandler = (function) => {
//     ()=>{

//     }
// }

// this is the shorter form of the above function

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// const asyncHandler = (function) => async (req, res, next) => {
//   try {
//     await function(req,res,next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export { asyncHandler };
