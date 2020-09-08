const stop = require("../stop/stop");

exports.handler = async (event, context) => {

    let result;
    
    if('dbClusterIdentifier' in event) {
        let dbClusterIdentifier = event.dbClusterIdentifier;
        result = await stop.stopAurora(dbClusterIdentifier);
    }

    if('dbInstanceIdentifier' in event) {
        let dbInstanceIdentifier = event.dbInstanceIdentifier;
        result = await stop.stopRDS(dbInstanceIdentifier);
    }

    return  {
        statusCode: 200,
        body: result
    }
}