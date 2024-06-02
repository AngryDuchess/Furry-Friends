import axios from "axios"

const fetchCats = async () => {
    try {
        const res = await axios.get(`https://api.thecatapi.com/v1/breeds?limit=3`, {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY
          },
        })
        return res.data
    } catch(error) {
        console.log(error)
    }
}

const fetchDogs = async () => {
  try {
      const res = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=10`, {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY
        },
      })
      return res.data
  } catch(error) {
      console.log(error)
  }
}

const getDogImage = async (id) => {
  try {
    const res = await axios.get(`https://api.thedogapi.com/v1/images/${id}`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
      }
    })
    return res.data?.url
  } catch(error) {
    console.log(error)
  }
}

const getCatImage = async (id) => {
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

const getCatDetails = async (id) => {
  try {
    const res = await axios.get(`https://api.thecatapi.com/v1/images/${id}`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
      }
    })
    return res.data
  } catch(error) {
    try {
      const res = await axios.get(`https://api.thedogapi.com/v1/images/${id}`, {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY
        }
      })
      return res.data
    } catch(error) {
      console.log(error)
    }
    console.log(error)
  }
}


export {
    fetchCats,
    getCatImage,
    getDogImage,
    getCatDetails,
    fetchDogs
}