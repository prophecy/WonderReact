import React from 'react'

export interface IBasePageProps {}

export interface IBasePageState {}

class BasePage extends React.Component<IBasePageProps, IBasePageState> {
  state = {}
  render() {
    return <div></div>
  }
}

export default BasePage
