# React Hubspot [![Build Status](https://travis-ci.org/adamsoffer/react-hubspot.svg?branch=master)](https://travis-ci.org/adamsoffer/react-hubspot)

A collection of React hooks for interacting with Hubspot APIs

## Installation

```
npm install --save react-hubspot
```

## Usage

```jsx
import { useForm } from 'react-hubspot'

export default () => {
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: '<PORTAL_ID>',
    formId: '<FORM_ID>'
  })

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="email" />
    </form>
  )
}
```
