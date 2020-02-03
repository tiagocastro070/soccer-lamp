import React from 'react';

import './Checkbox.scss';

export default function Checkbox(props) {
	return (
		<div className="form-group form-check">
			<input type="checkbox" className="form-check-input" id={ props.id } />
			<label className="form-check-label" htmlFor={ props.id }>{ props.children }</label>
		</div>
	);
}
