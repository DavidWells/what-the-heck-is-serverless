import axios from 'axios'

export function handler(event, context, callback) {
  const body = JSON.parse(event.body)
  console.log(body.payload.data)
  const formData = body.payload.data

  const airTableData = {
    // Airtable Fields are case sensitive
    'fields': {
      'Email': formData.email,
      'Name': formData.name,
      'Questions': formData.questions,
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
