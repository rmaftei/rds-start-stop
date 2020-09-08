const start = require("../start/start");

exports.handler = async (event, context) => {

    let result;
    
    if('dbClusterIdentifier' in event) {
        let dbClusterIdentifier = event.dbClusterIdentifier;
        result = await start.startAurora(dbClusterIdentifier);
    }

    if('dbInstanceIdentifier' in event) {
        let dbInstanceIdentifier = event.dbInstanceIdentifier;
        result = await start.startRDS(dbInstanceIdentifier);
    }

    return  {
        statusCode: 200,
        body: result
    }
}