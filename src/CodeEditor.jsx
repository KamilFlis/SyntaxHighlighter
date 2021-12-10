import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from "@mui/material/Grid";

import java from "./languages/java.json";
import javaScript from "./languages/javascript.json";
import python from "./languages/python.json";
import c from "./languages/c";


export default function CodeEditor() {

    const [language, setLanugage] = useState("Java");
	const [text, setText] = useState("");
	
	const supportedLanguages = ["Java", "JavaScript", "Python", "C"];	

	let keywords;
	let instructions;
	let modifiers;
	let types;
	let classFunctions;

	const handleSetLanguage = (event) => {
        setLanugage(event.target.value);
	}
	
	const setKeywords = lang => {
		keywords = Array.prototype.concat.apply([], [lang.instructions, lang.modifiers, lang.types, lang.classFunctions]);
		instructions = lang.instructions;
		modifiers = lang.modifiers;
		types = lang.types;
		classFunctions = lang.classFunctions;
	}

	switch(language) { 
		case "Java":
			setKeywords(java);
			break;
		case "JavaScript":
			setKeywords(javaScript);
			break;
		case "Python":
			setKeywords(python);
			break;
		case "C":
			setKeywords(c);
			break;
		default: 
			keywords = [];
			instructions = [];
			types = [];
			classFunctions = [];
			break;
	}
	


	return (
        <>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<FormControl sx={{ m: 1, minWidth: '15%' }}>
						<InputLabel id="demo-simple-select-autowidth-label">Programming language</InputLabel>
						<Select
							labelId="demo-simple-select-autowidth-label"
							id="demo-simple-select-autowidth"
							value={language}
							onChange={handleSetLanguage}
							autoWidth
							label="Programming language"
						> {
							supportedLanguages.map(lang => <MenuItem value={lang}>{lang}</MenuItem>)
						}
							
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={6}>
					<TextareaAutosize					
						style={{ width: '98%', resize: "none", height: '600px', margin: "1em", backgroundColor: "rgba(43,43,43,255)", color: "white" }}
						onChange={e => setText(e.currentTarget.value)}
					/>
				</Grid>
				<Grid item xs={6}>
					<div style={{whiteSpace: 'pre-wrap', margin: "1em", backgroundColor: "rgba(43,43,43,255)", height: '600px'}}>{
							text.split(" ").map(word => {
								if(keywords.includes(word)) {
									if(instructions.includes(word)) {
										return <span style={{color: "red"}}> {word}</span>;		
									} else if(modifiers.includes(word)) {
										return <span style={{color: "yellow"}}> {word}</span>;
									} else if(types.includes(word)) {
										return <span style={{color: "green"}}> {word}</span>;
									} else if(classFunctions.includes(word)) {
										return <span style={{color: "blue"}}> {word}</span>;
									}
								} else {
									return <span style={{color: "white"}}> {word}</span>;
								}
							})
						}
					</div>
				</Grid>
			</Grid>
        </>
    );
}