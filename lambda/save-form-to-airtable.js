import axios from 'axios'

export function handler(event, context, callback) {
  const body = JSON.parse(event.body);
  const airTableData = {
    'fields': {
      'Email': body.email,
      'Name': body.name,
      'Questions': body.questions,
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
