import React,{useState} from 'react';
import Heading from "./Heading"
import Footer from "./Footer"
import Addnote from "./Addnote"
import Note from "./Note"

const Cloneapp=()=>{

	const [additem,setadditem]=useState([]);
	const addnote=(note)=>{
	setadditem((oldata)=>{
		return[...oldata,note];
	});
	console.log(note);
}

const ondelete=(id)=>{
	setadditem((olddata)=>
		olddata.filter((cuurdata,indx)=>{
			return indx !==id;
		})
	)

}

	return(<>
	<Heading/>
	<Addnote passnote={addnote}/>
	
	{additem.map((val,index)=>{
		return(<Note 
		key={index}
		id={index}
		title={val.title}
		content={val.content}
		del={ondelete}/>);
	})}
	<Footer/>
	</>);

}

export default Cloneapp;