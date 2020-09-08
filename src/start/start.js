const AWS = require("aws-sdk");

module.exports.startAurora = (dbClusterIdentifier) => {
    return new Promise((resolve, reject) => {
        let rds = new AWS.RDS();

        let params = {
            DBClusterIdentifier: dbClusterIdentifier
        };

        rds.startDBCluster(params, (err, data) => 
            defaultResponse(resolve, reject,err, data, dbInstanceIdentifier));
    });
}

module.exports.startRDS = (dbInstanceIdentifier) => {
    return new Promise((resolve, reject) => {
        let rds = new AWS.RDS();

        let params = {
            DBInstanceIdentifier: dbInstanceIdentifier
        };

        rds.startDBInstance(params, (err, data) => 
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