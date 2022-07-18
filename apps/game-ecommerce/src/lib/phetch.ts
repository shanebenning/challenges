const phetch = async (resource, options) => {
  const res = await fetch(resource, options)

  if (!res.ok) {
    const error = new Error(`An error occurred while fetching data.`)
    error["info"] = await res.json()
    error["status"] = res.status
    throw error
  }

  return res.json()
}

export default phetch