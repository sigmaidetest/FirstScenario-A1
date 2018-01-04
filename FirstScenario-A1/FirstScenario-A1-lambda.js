const ddb = AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
    ddb.put({
        TableName: 'Students',
        Item: { id: 1, name: 'Chathura', uni: 'Moratuwa' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}