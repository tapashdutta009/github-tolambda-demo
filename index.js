const { v4: uuidv4 } = require('uuid');

exports.handler = async (event, context) => {
    console.log('event', event);
    console.log('Context', context);
    const newToken = uuidv4();
    console.log('uuid token', newToken);
    
    return {
        statusCode: 200,
        message: 'Successful'
    }
}