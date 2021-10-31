const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // '37.8267,-122.4233'

const url = 'http://api.weatherstack.com/current?access_key=cafb26f4b8cc65f29773eb7949547a0e&query=' + latitude + ',' + longitude 
//+ '&units=f'

request({url,json: true}, (error,{body} = {}) => {
    if (error) {
        callback('Unable to connect to weather services',undefined)
    } else if (body.error) {
        callback('Unable to find location',undefined)
    } else {
    callback(body.current.weather_descriptions[0]  + '. It is currently ' + body.current.temperature  + ' degrees out.' + ' It feels like ' + body.current.feelslike  + ' degrees out' )
        }
})
}

module.exports = forecast