const axios = require('axios');
class APIDataProcessor{
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }
    async fetchData(){
        try{
            const response = await axios.get(this.apiUrl);
            // console.log(response.data)
            return this.processData(response.data)
        }
        catch(error){
            console.log('Error fetching data', error);
            return null;
        }
    }
    processData(data){
        // if(data)
        // return data.map(item => ({
        //     id:item.id,
        //     firstName: item.firstName,
        //     lastName : item.lastName,
        //     email:item.email,
        //     processedAt : new Date().toISOString()
        // }))
        const arrname = Object.values(data).find((value) => Array.isArray(value) && value.length > 0 && typeof value[0] === 'object');
        if(arrname){
            return arrname.map((item) => ({
                ...item,
                processedAt : new Date().toISOString(),
            }))
        }else{
            console.log('Error')
            return []
        }
    }
    async saveToFile(processData) {
        const fs = require('fs').promises;
        const urlSegment = this.apiUrl.split('/');
        let fileName = urlSegment[urlSegment.length - 1] || 'processed-data';
        if(!fileName.endsWith('.json')){
            fileName += '.json';
        }
        try{
            await fs.writeFile(fileName, JSON.stringify(processData,null,2));
            console.log('Data saved successfully')
        }
        catch(error){
            console.log('Error while saving data', error)
        }
    }
    async runFullProcess(){
        const data = await this.fetchData();
        if(data){
            await this.saveToFile(data)
        }
    }
}

const processor = new APIDataProcessor('https://dummyjson.com/users');
processor.runFullProcess();

const quoteProcessor = new APIDataProcessor('https://dummyjson.com/quotes');
quoteProcessor.runFullProcess()