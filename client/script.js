async function retrieveData() {
  const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
  const data = await fetch(url);
  const json = await data.json(); 
  console.log(json);
  // here is where we get the data from our request as JSON
}
retrieveData();