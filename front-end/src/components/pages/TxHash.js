import React, {Component} from 'react';


const TxHash = props => {
	return (
		<div><br/>
				Transaction Hash:
			<h4 className="hash">{props.hash}</h4>		
		</div>
	)

}

export default TxHash;