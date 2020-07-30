import React, { Component } from 'react'
import List from '../component/List/List'
import Header from '../component/Header/Header'
import Form from '../UI/Form/Form'
import Wrapper from '../Wrapper/Wrapper'
import style from './TodoList.module.css'
class TodoList extends Component {
  state = {
    task: [
      { id: 1, name: 'Complete HOMEWORKS' },
      { id: 2, name: 'LEARN MUSIC' },
      { id: 3, name: 'Eat ' }
    ],
    value: ''
  }

  // handleChange = this.handleChange.bind(this)
  // handleSubmit = this.handleSubmit.bind(this)

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    const list = [...this.state.task]
    const join = list.concat({
      id: list[list.length - 1].id + 1,
      name: this.state.value
    })
    this.setState({ task: join })
    this.setState({ value: '' })
    event.preventDefault()
  }

  delete = id => {
    const tasks = this.state.task.slice()
    const newTask = tasks.filter(el => {
      return el.id !== id
    })
    this.setState({ task: newTask })
  }
  ad = event => {
    console.log(event.target.value)
  }

  render () {
    return (
      <Wrapper>
        <Header num={this.state.task.length} />
        <div className={style.FlexRow}>
          <Form
            value={this.state.value}
            handleSubmit={e => this.handleSubmit(e)} // this.handleSubmit.bind(this) its the same
            handleChange={this.handleChange.bind(this)}
          />
        </div>
        <List filt={this.delete} list={this.state.task} />
      </Wrapper>
    )
  }
}

export default TodoList
