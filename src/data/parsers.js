import format from './format'
import moment from 'moment'

function usStats(data) {
    const [usStatRaw] = data

    return {
        cases: format.number(usStatRaw.cases),
        deaths: format.number(usStatRaw.deaths),
        vaccines: format.number(usStatRaw.vaccinesAdministered),
        infectionRate: format.number(usStatRaw.infectionRate),
        hospitalized: format.number(usStatRaw.hospitalBeds.currentUsageCovid),
        icu: format.number(usStatRaw.icuBeds.currentUsageCovid),
        testedPositive: format.number(usStatRaw.positiveTests),
        updated: moment(usStatRaw.lastUpdatedDate).format('LLLL')
    }
}

export default {
    usStats
}