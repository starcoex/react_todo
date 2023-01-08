import React, { useState } from 'react'

function ToDoList() {
  const [value, setValue] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: { value }, } = event
    setValue(value)

  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(value)

  }
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder='Write To do....' />
        <button>Adds</button>
      </form>
    </div>
  )
}

export default ToDoList