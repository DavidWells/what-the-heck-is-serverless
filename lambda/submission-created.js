import axios from 'axios'

export function handler(event, context, callback) {
  console.log('Form submission', event)
  console.log('context', context)
  const body = JSON.parse(event.body);
  const airTableData = {
    // Airtable Fields are case sensitive
    'fields': {
      'Email': body.email,
      'Name': body.name,
      'Questions': body.questions,
      // Make sure the Date field is set to Date Type in airtable with "include time field" set
      'Date': new Date().toISOString()
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
    // console.log('airtable response')
    // console.log(response)
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        success: true
      })
    })
  })
  .catch((err) => {
    // console.log('airtable error')
    // console.log(err)
    return callback(null, {
      body: JSON.stringify(err)
    })
  })
}
