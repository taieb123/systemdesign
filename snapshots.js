const PercyScript = require('@percy/script');
const httpServer = require('http-server');

const PORT = process.env.PORT_NUMBER || 8000;
const TEST_URL = `http://localhost:${PORT}`;

const ArrayPage = ['/','/Contact.html'];

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  let server = httpServer.createServer();
  server.listen(PORT);

  console.log(`Server started at ${TEST_URL}`);

  for (let index = 0; index < ArrayPage.length; index++) {
    
      await page.goto(TEST_URL+ArrayPage[index]);
      await percySnapshot('page Url :'+TEST_URL+ArrayPage[index]);
      
  }
 // await page.goto(TEST_URL);
  //await percySnapshot('TodoMVC home page');
  // Enter a new to-do.
  //  await page.type('.new-todo', 'A really important todo Test');
  //await page.keyboard.press('Enter');
  //await percySnapshot('TodoMVC with a new todo', { widths: [768, 992, 1200] });
  server.close();
});
