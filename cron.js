var cron = require('node-schedule');
var rule = new cron.RecurrenceRule();
rule.hour = 0;
rule.minute = 1;
cron.scheduleJob(rule, function(){
	console.log(new Date(), 'Every 4 hours');
});