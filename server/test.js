const fs = require('fs').promises;

async function test() {
  const users = await fs.readFile('./students/students.csv', 'utf8');
  console.log(users)
}

test()
