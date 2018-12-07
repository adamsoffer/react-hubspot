import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const useForm = ({ portalId, formId }) => {
  const [data, setData] = useState()
  const [url, setUrl] = useState(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
  )
  const [form, setForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)
    try {
      const formData = new FormData(form)
      const data = {
        fields: []
      }
      for (var pair of formData.entries()) {
        data.fields.push({ name: pair[0], value: pair[1] })
      }
      const result = await axios({
        method: 'post',
        url,
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setData(result)
      setForm(false)
    } catch (e) {
      setIsError(true)
      setForm(false)
    }

    setIsLoading(false)
  }

  useEffect(
    () => {
      if (form) {
        fetchData()
      }
    },
    [form]
  )

  const handleSubmit = e => {
    e.preventDefault()
    setForm(e.target)
  }

  return { data, isLoading, isError, handleSubmit }
}

export default useForm
