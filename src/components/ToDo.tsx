import React from 'react'
import { useSetRecoilState } from 'recoil'
import { IToDo, toDoState } from './atoms'

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  // const onClick = (newCategory: IToDo['category']) => {
  //   console.log(newCategory)
  // }
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { name } } = event
    console.log(name)
  }
  return (
    <li>
      <span>{text}</span>
      {/* {category !== "DOING" && (<button onClick={() => onClick("DOING")}>Doing</button>)} */}
      {category !== "DOING" && (<button name='DOING' onClick={onClick}>Doing</button>)}
      {category !== "TO_DO" && (<button name='TO_DO' onClick={onClick}>ToDo</button>)}
      {category !== "DONE" && (<button name='DONE' onClick={onClick}>Done</button>)}
    </li>
  )
}

export default ToDo