import React, { PureComponent } from 'react'

export default class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Ttracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    )
  }
}
