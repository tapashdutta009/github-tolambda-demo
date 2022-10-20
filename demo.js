const { v4: uuidv4 } = require('uuid');

exports.handler = async (event, context) => {
    console.log(event);
    const newToken = uuidv4();
    console.log(newToken);
    return {
        statusCode: 200,
        message: 'Successful'
    }
}