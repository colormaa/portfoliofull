var CronJob = require('cron').CronJob;
const fetchGithub =  require('./tasks/fetch-github')
//crontab.guru
new CronJob(' */1 * * * * ', fetchGithub, null, true, 'America/Los_Angeles')



//install redis

//sudo apt update
//sudo apt install redis-server
// sudo  nano /etc/redis/redis.conf
// supervised systemd  
// # change that only to redis.conf
// sudo systemctl restart  redis.service

// sudo  systemctl status redis
// redis-cli
// in redis-cli > FLUSHALL
// npm i redis