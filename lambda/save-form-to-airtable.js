import axios from 'axios'

export function handler(event, context, callback) {
  const airTableData = {
    'fields': {
      'Email': data.email,
      'Name': data.name,
      'Questions': data.questions,
      'Date': new Date()
    }
  }
  axios({
    method: 'post',
    url: 'https://api.airtable.com/v0/appOflxgjADXC8i6K/Questions',
    data: airTableData,
    headers: {
      'Authorization': `Bearer ${process.env.AIR_TABLE_KEY}`,
    },
  })
  .then((response) => {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
  .catch((err) => {
    console.log('AirTable Error', err)
    return callback(null, {
      statusCode: err.statusCode,
      body: err.message
    })
  })
}
