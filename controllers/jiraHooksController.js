var request = require('request');

exports.hookParse = function  (hook) {
    console.log(hook, 'controller');
    const message = {
        channel: "StasMMintegration",
        username: "JiraBot",
        icon_url : "https://www.mattermost.org/wp-content/uploads/2016/04/icon.png",
        text: hook.user.displayName + " created a task" + hook.issue.key + '/n ' + hook.issue.fields.description,
    }
    console.log(message, 'message');
    var clientServerOptions = {
        uri: 'https://mattermost.lanars.com/hooks/phg368euej81fb3mop4ub1ho5r',
        body: JSON.stringify(message),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    request(clientServerOptions, function (error, response) {
        console.log(error,response.body);
        return;
    });

};

// module.exports = [hookParse];