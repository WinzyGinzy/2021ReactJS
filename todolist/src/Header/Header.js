import React from "react";

const Header = ({numberOfTasks}) => {
	return (
		<header className="App-header">
			<h1>Notes to myself</h1>
            <p>I have currently <span className="number-of-notes">{numberOfTasks}</span> notes</p>
		</header>
	);
};

export default Header;