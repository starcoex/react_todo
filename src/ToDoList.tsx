import React, { useState } from 'react'

function ToDoList() {
  const [value, setValue] = useState("")
  const [toDoError, setToDoError] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: { value }, } = event
    setToDoError("")
    setValue(value)

  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(value)
    if (value.length < 10) {
      return setToDoError("To do should be longer")
    }
    console.log("submit")

  }
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder='Write To do....' />
        <button>Adds</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  )
}

export default ToDoList