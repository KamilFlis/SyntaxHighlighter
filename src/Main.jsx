import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';

const javaKeywords = [
	"abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do",
	"double", "else", "enum", "extends", "final", "finally", "float", "for", "goto", "if", "implements", "import", "instanceof",
	"int", "interface", "long", "native", "new", "package", "private", "protected", "public", "return", "short", "static",
	"strictfp", "String", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile", "while"
];

const javaScriptKeywords = [
	"await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", 
	"export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", 
	"let", "new", "null", "package", "private", "protected", "public", "return", "super", "switch", "static", "this", "throw",
	"try", "true", "typeof", "var", "void", "while", "with", "yield"
];

const pythonKeywords = [
	"False", "await", "else", "import", "pass", "None", "break", "except", "in", "raise", "True", "class", "finally", "is", "return",
	"and", "continue", "for", "lambda", "try", "as", "def", "from", "nonlocal", "while", "assert", "del", "global", "not", "with", 
	"async", "elif", "if", "or", "yield"
];

export default function Main() {

    const [language, setLanugage] = useState("Java");
	const [text, setText] = useState("");

	let keywords;

	const handleSetLanguage = (event) => {
        setLanugage(event.target.value);	
	} 
	
	switch(language) { 
		case "Java":
			keywords = javaKeywords;
			break;
		case "JavaScript":
			keywords = javaScriptKeywords;
			break;
		case "Python":
			keywords = pythonKeywords;
			break;
		default: 
			console.log("default");
	}
	
	return (
        <>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<FormControl sx={{ m: 1, maxWidth: '15%' }}>
					<InputLabel id="demo-simple-select-autowidth-label">Programming language</InputLabel>
					<Select
						labelId="demo-simple-select-autowidth-label"
						id="demo-simple-select-autowidth"
						value={language}
						onChange={handleSetLanguage}
						autoWidth
						label="Programming language"
					>
						<MenuItem value={"Java"}>Java</MenuItem>
						<MenuItem value={"JavaScript"}>JavaScript</MenuItem>
						<MenuItem value={"Python"}>Python</MenuItem>
					</Select>
				</FormControl>

				<TextareaAutosize					
					style={{ width: '98%', margin: '1em', backgroundColor: 'rgba(43,43,43,255)', color: 'white' }}
					onChange={e => setText(e.currentTarget.value)}
				/>

				<div style={{whiteSpace: 'pre-wrap', margin: "1em"}}>{
						text.split(" ").map(word => {
							if(keywords.includes(word)) {
								return <span style={{color: "red"}}> {word}</span>;
							} else {
								return <span> {word}</span>;
							}
						})
					}
				</div>
			</Box>
        </>
    );
}