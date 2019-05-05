import axios from 'axios'

export default async function() {
  const response = await axios.get(`${process.env.GATSBY_API_URL}/get-name`)
  return response.data
}
