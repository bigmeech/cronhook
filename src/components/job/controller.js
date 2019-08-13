const jobService = require('./service');

/**
 *
 * @param request
 * @returns {Promise<void>}
 */
exports.addJob = async function addJobs(request){
    let job;
    const { body } = request;
    const jobData = body;

    try{
        job = await jobService.addJob(jobData);
        return job;
    } catch (ex){
        console.log(ex.message);
        throw ex;
    }
};