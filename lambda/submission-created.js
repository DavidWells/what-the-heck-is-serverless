import axios from 'axios'

export function handler(event, context, callback) {
  // First parse the body and turn into object
  const body = JSON.parse(event.body)
  // Then grab the payload object from body
  const formData = body.payload.data
  // Then set airTableData
  const airTableData = {
    // Note: Airtable Fields are case sensitive & must match your airtable columns
    'fields': {
      'Email': formData.email,
      'Name': formData.name,
      'Questions': formData.questions,
      // Note: Set Date field to Date Type in airtable with "include time field" toggled on
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
    console.log('airtable response')
    console.log(response.data)
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response.data)
    })
  })
  .catch((err) => {
    console.log('airtable error')
    console.log(err)
    return callback(null, {
      body: err.message
    })
  })
}
