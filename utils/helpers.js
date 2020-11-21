/*
 * Helpers Functions
 * Desc: to handle the success and errors of each incoming request 
 */
module.exports = {
    handleErrorResponse: (err) => {
        return {
            data: err,
            error: true,
            message: "Somthing went wrong...",
            status: 500,
        }
    },
    /*
    * Desc: handle success 
    */
    handleSuccessResponse: (result) => {
        return {
            data: result,
            error: false,
            message: "retrive data successfully",
            status: 200,
        }
    }
}