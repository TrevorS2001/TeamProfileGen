// Manager card template
const manager = data => {
  return `
  <div id="${data.getRole()}-card">
    <div>
      <h2>${data.getName()}</h2>
      <h3>Role: ${data.getRole()}</h3>
    </div> 
    <div>
      <ul>
        <li>ID: ${data.getId()}</li>
        <li>Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
        <li>Office Number: ${data.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
`
}

// Engineer card template
const engineer = data => {
  return `
  <div id="${data.getRole()}-card">
    <div>
      <h2>${data.getName()}</h2>
      <h3>Role: ${data.getRole()}</h3>
    </div> 
    <div>
      <ul>
        <li>ID: ${data.getId()}</li>
        <li>Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
        
        <li>Github:
        <a href="https://www.github.com/${data.getGithub()}" target="_blank">www.github.com/${data.getGithub()}</a>
        </li>
      </ul>4
    </div>
  </div>
`
}

// Intern card template
const intern = data => {
  return `
  <div id="${data.getRole()}-card">
    <div>
      <h2>${data.getName()}</h2>
      <h3>Role: ${data.getRole()}</h3>
    </div> 
    <div>
      <ul>
        <li>ID: ${data.getId()}</li>
        <li>Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
        <li>School: ${data.getSchool()}</li>
      </ul>
    </div>
  </div>
`
}

const employeesDiv = empArr => {
  let empHtml = ''

  for ( i = 0; i < empArr.length; i++ ) {
    if (empArr[i].getRole() === "Manager"){
      empHtml = empHtml + manager(empArr[i])
    }
    if (empArr[i].getRole() === "Engineer"){
      empHtml = empHtml + engineer(empArr[i])
    }
    if (empArr[i].getRole() === "Intern"){
      empHtml = empHtml + intern(empArr[i])
    }
  } return empHtml
}

// html page template
const template = data => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Team Profile</title>
    </head>
    <body>
      <header>
        <div>
          <h1> My Team </h1>
        </div>
      </header>
      <main>
      ${employeesDiv(data)}
      </main>
    </body>
  </html>
`
}

module.exports = template;