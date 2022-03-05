exports.ResponseServiceHasData = async (status, data) => {
    return await {
        status: status,
        data: data
    }
}

exports.ResponseServiceNoData = async (status, message) => {
    return await {
        status: status,
        message: message
    }
}