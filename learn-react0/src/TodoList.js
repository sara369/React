import React from 'react'
import todo from './todo'

export default function TodoList({todos}) {
  return (
        todos.map(todo => {
            return <todo todo={todo} />
        })
  )
}
