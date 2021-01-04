const fetch = require('node-fetch')
const redis = require('redis')
const client = redis.createClient()

const {promisify} = require('util')

const getAsync =  promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client)
const baseURL =  'https://jobs.github.com/positions.json'
//https://jobs.github.com/positions.json?page=0

async function fetchGithub(){

    let resultcount = 1,  onPage = 0;
    const allJobs = [];


    //fetch all pages
    while(resultcount>0){
        const res =  await fetch(`${baseURL}?page=${onPage}`)
        const jobs = await res.json()
        allJobs.push(...jobs)
        console.log('got '+ jobs.length+ " page "+onPage)
        resultcount= jobs.length
        onPage++;
    }

    console.log("all jobs ", allJobs.length)

    // filter algo
    const jrJobs =  allJobs.filter(job=>{
        const jobTitle =  job.title.toLowerCase()
        
        if(jobTitle.includes('senior') || 
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect')
        ){
            return false
        }

        return true
    });

    console.log("filtered jobs ", jrJobs.length)


    //set redis
    const success =  await setAsync('github', JSON.stringify(jrJobs) )
    console.log({success})
}

module.exports = fetchGithub