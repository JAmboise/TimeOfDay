
const getTimeOfDay = (time) => {
    if (time >= 4 && time < 12) {
        return 'morning'
    } else if (time >= 12 && time < 17) {
        return 'afternoon'
    } else {
        return 'evening'
    }
}

const isMorning = (time) => {
    return time >= 4 && time < 12
}

const isAfternoon = (time) => {
    return time >= 12 && time < 17
}

const isEvening = (time) => {    
    return time >= 17 || time < 4
}

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening }