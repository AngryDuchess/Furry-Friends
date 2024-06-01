import axios from "axios"

const fetchCats = async () => {
    try {
        const res = await axios.get(`https://api.thecatapi.com/v1/breeds?limit=10`, {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY
          },
        })
        return res.data
    } catch(error) {
        console.log(error)
    }
}

const getImage = async (id) => {
  try {
    const res = await axios.get(`https://api.thecatapi.com/v1/images/${id}`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
      }
    })
    return res.data?.url
  } catch(error) {
    console.log(error)
  }
}

const getPetDetails = async (id) => {
  try {
    const res = await axios.get(`https://api.thecatapi.com/v1/images/${id}`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
      }
    })
    return res.data
  } catch(error) {
    console.log(error)
  }
}

export {
    fetchCats,
    getImage,
    getPetDetails
}