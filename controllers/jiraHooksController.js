var request = require('request');

exports.hookParse = function  (hook) {
    let message;
    console.log(hook, 'controller');
if (hook.webhookEvent == 'worklog_created') {
    message = {
        // channel: getChannel(hook),
        channel: 'StasMMintegration',
        username: "JiraBot",
        icon_url: "https://www.mattermost.org/wp-content/uploads/2016/04/icon.png",
        text: createWorklogMessage(hook)

    };
} else {
    message = {
        // channel: getChannel(hook),
        channel: 'StasMMintegration',
        username: "JiraBot",
        icon_url: "https://www.mattermost.org/wp-content/uploads/2016/04/icon.png",
        text: createTaskMessage(hook)

    };
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

function createTaskMessage (hook) {
    let action;
    let  description;
    try {
        description =  hook.issue.fields.description;
    } catch (e) {
        description = ''
    }
    const task = hook.issue.key;
    const name = hook.user.displayName;
    switch (hook.issue_event_type_name)  {
        case 'issue_assigned':
            action = 'assigned a task';
            break;
        case 'issue_created':
            action = 'created a task';
            break;
        case 'comment_created':
            action ='commented a task';
            break;
        default:
            action = 'does some magic with'
    }
    let parsedMessage = name +' ' + action + ' ' + task + '\n' + description;
    return parsedMessage;
};

function createWorklogMessage(hook) {
    const creator = hook.worklog.author.displayName;
    const action = 'created a worklog to task ';
    const task = hook.worklog.issueId;
    worklogMessage = creator + ' ' + action + task;
    return worklogMessage;
}

//
// function getChannel(hook) {
//
//     return channel
// }

