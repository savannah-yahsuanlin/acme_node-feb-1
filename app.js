const fs = require('fs')

fs.readFile('employee.json', (err, data) => {
	if(err) {
		console.log(err)
	} else {
		const employees = JSON.parse(data.toString())
	}
})