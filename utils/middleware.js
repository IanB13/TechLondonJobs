const errorHandler = (error, request, response, next) => {
    console.log("Unhandled Error!!")
    console.log(error.message)

    next(error)
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

module.exports = {
    errorHandler,
    unknownEndpoint
}