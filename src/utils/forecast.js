const request = require('request')

const forecast = (latitiude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ea1f11858aab48473c096c4d905de54c/' + latitiude + ',' + longitude

    request({url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined ,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature 
                + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast