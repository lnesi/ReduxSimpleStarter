import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component{
	render(){
		return(
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-iten">
						Sign In
					</li>
				</ul>
			</nav>
		);
	}
}

export default connect(null)(Header);