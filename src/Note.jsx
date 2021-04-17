import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';

function Note(props){

	const indelete=()=>{
		props.del(props.id);
	}
	
	return(<>
		<div class="noteritem">
		<h1>{props.title}</h1><br/>
		<p>{props.content}</p>
		<Button id="delbut" style={{marginLeft:'68%'}} onClick={indelete}>
		<DeleteForeverIcon/>
		</Button>

		
		</div>
		

		</>);
}

export default Note;