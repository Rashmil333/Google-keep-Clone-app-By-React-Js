import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
function Addnote(props){

	const [expand,setexpand]=useState(false);
	

	const expandnote=()=>{
		setexpand(true);
	}

	const [note,setnote]=useState({
		title:'',
		content:''
	});

	const inputevent=(event)=>{
		const {name,value}=event.target;
		setnote((olddata)=>{
			return{
				...olddata,
				[name]:value
			};
		});

		console.log(note);
	}

	const addevent=()=>{
		setexpand(false);
		props.passnote(note);
		setnote({
			
		    content:'',
		    title:'',
		});

	}

	
	return(<>
		<div id="noterdiv" >
		<form>

		 {expand ? <input id="noterinput" name="title" value={note.title} type="text" placeholder="Add note" onChange={inputevent} autoComplete="off"/>:null}
		  <input id="noterinput" name="content" value={note.content} placeholder="write a note" onChange={inputevent} onClick={expandnote} ></input><br/>
		  <Button style={{color:'yellow',marginLeft:'80%'}} onClick={addevent}><AddIcon/></Button>

		</form>

		</div>
		

		</>);
}

export default Addnote;