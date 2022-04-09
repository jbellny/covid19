import axios from 'axios'
import parsers from './parsers'


const apiUrl1 = 'https://api.covidtracking.com/v1/us/current.json'
const apiKey1 = ''
const apiUrl2 = 'https://api.covidactnow.org/v2/country/US.json'
const apiKey2 = '?apiKey=bc6eaea9e91f4e279ee04108078db8fd'

async function usStats() {
    const response = await axios.get(`${apiUrl2}${apiKey2}`)
    // const response = await axios.get("https://covidtracking.com/api/v1/us/current.json")

    const combinedStats = {...response.data.actuals, ...response.data.metrics, lastUpdatedDate: response.data.lastUpdatedDate}
    const parsedResponse = [combinedStats]
    console.log("DATA:",parsedResponse)
    // return parsers.usStats(response.data)
    return parsers.usStats(parsedResponse)
}

export default {
    usStats
}