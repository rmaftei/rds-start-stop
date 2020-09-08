const AWS = require("aws-sdk");

module.exports.stopAurora = (dbClusterIdentifier) => {
    return new Promise((resolve, reject) => {
        const rds = new AWS.RDS();

        const params = {
            DBClusterIdentifier: dbClusterIdentifier
        };

        rds.stopDBCluster(params, (err, data) => 
            defaultResponse(resolve, reject, err, data, dbInstanceIdentifier));
    });
}

module.exports.stopRDS = (dbInstanceIdentifier) => {
    return new Promise((resolve, reject) => {
        const rds = new AWS.RDS();

        const params = {
            DBInstanceIdentifier: dbInstanceIdentifier
        };

        rds.stopDBInstance(params, (err, data) => 
            defaultResponse(resolve, reject, err, data, dbInstanceIdentifier));
    });
}

let defaultResponse = (resolve, reject,err, data, id) => {
    if(err) {
        reject(err);
    } else {
        console.log(`Starting ${id}`);
        resolve(data);
    }
}