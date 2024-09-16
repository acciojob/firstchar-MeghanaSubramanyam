function firstChar(text) {
  // your code here
	for(let i=0;i<str.length;i++){
		if(str[i]!=''){
			return str[i]
		}
	}
	return ''
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
