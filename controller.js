
const Service = require('./service');

async function getTasks (req, res) {
    try {
        let svc = new Service();
        let result = await svc.getTasks();
        return result;
    } catch (error) {
        return error;
    }
}   

async function getTask (req, res) {    
    try {
        let svc = new Service();
        let result = await svc.getTask(req.params.id);
        return result;
    } catch (error) {
        return error;
    }
}

async function addTask(req, res) {
    try {
        let svc = new Service();
        let result = await svc.addTask(req.body);
        return result;
    } catch (error) {
        return error;
    }
}

async function updateTask(req, res) {
    try {
        let svc = new Service();
        let result = await svc.updateTask(req.body)
        return result;        
    } catch (error) {
        return error;
    }
}

async function deleteTask(req, res) {
    try {
        let svc = new Service();
        let result = await svc.deleteTask(req.body)
        return result;
    } catch (error) {
        return error;
    }
}

module.exports =  { getTasks, getTask, addTask, updateTask, deleteTask }