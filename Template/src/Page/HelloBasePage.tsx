import React from 'react'
import './helloBase.scss'

export interface IHelloBasePageProps {}

export interface IHelloBasePageState {}

class HelloBasePage extends React.Component<
  IHelloBasePageProps,
  IHelloBasePageState
> {
  state = {}
  render() {
    return <div className={'page'}></div>
  }
}

export default HelloBasePage
