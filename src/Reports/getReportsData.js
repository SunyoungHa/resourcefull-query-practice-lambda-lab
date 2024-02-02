// Importing the Client class from the "pg" (PostgreSQL) library
const { Client } = require("pg");

// Defining an asynchronous function named "handler" to handle Lambda function execution
export async function handler(event, context, callback) {
  
  // Parsing the JSON data from the incoming event's body
  const data = JSON.parse(event.body);
  console.log(data); // Logging the parsed data (assuming data.provider stores the provider organization's name)
   
  // Creating a new PostgreSQL client with connection details from environment variables
  const client = new Client({
    user: process.env.MOCK_USER,
    host: process.env.MOCK_HOST,
    database: process.env.MOCK_DB_NAME,
    password: process.env.MOCK_PASSWORD,
    port: process.env.MOCK_PORT,
  });
  
  // Connecting to the PostgreSQL database
  await client.connect();

  // Defining a SQL query string to select all rows from a table where the provider matches a parameter
  const text = "SELECT * FROM provider_participant_intake WHERE provider = $1";

  // Defining an array of values to substitute the placeholders in the SQL query
  const values = [data.provider];

  // Executing the SQL query with the specified values using the PostgreSQL client
  const providerIntakes = await client.query(text, values);
  console.log(`${data.provider} intakes`, providerIntakes);


   // Example 1
  const query1Text = "SELECT provider FROM provider_participant_intake WHERE gender = $1";
  const query1Values = [data.gender];
  const providerIntakes1 = await client.query(query1Text, query1Values);
  console.log("Query 1 providerIntakes:", providerIntakes1.rows);


   // Example 2
   const query2Text = "INSERT INTO provider_participant_intake (provider, gender) VALUES ($1, $2)";
   const query2Values = [data.provider, data.gender];
   const providerIntakes2 = await client.query(query2Text, query2Values);
   console.log("Query 2 providerIntakes:", providerIntakes2.rows);
 
   // Example 3
   const query3Text = "DELETE FROM provider_participant_intake WHERE gender = $1";
   const query3Values = [data.gender];
   const providerIntakes3 = await client.query(query3Text, query3Values);
   console.log("Query 3 providerIntakes:", providerIntakes3.rows);

  // Creating a response object with a status code, headers, and a JSON body containing the query providerIntakess
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(providerIntakes.rows),
    body: JSON.stringify({
      query1providerIntakes: providerIntakes1.rows,
      query2providerIntakes: providerIntakes2.rows,
      query3providerIntakes: providerIntakes3.rows,
      // Add more as needed for your queries
    }),
    // Customize this value as needed so the UI can get data stored here.
    // Important: if sending results from a database query, be sure to execute JSON.stringify()
  };
  
  // Calling the provided callback function with the response object
  callback(null, response);

  // Closing the connection to the PostgreSQL database
  await client.end();

  // Returning "success" (this might not be seen by the caller as the response is already sent)
  return "success";
}

// Exercise 8: From the Pseudocoding Databases with Product Querying Practice Lab Activity for the Reports tab in the ResourceFull Provider App, try refactoring 3 queries to insert your own PostgreSQL in JS queries in the Lambda file you created. Make sure you console.log() every query result. Then test in Postman to see if you get the appropriate responses logged in VS Code Terminal!


