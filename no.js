const express = require('express')
const Moralis = require('moralis').default
const { EvmChain } = require("@moralisweb3/common-evm-utils")

const app = express()
const port = 3000

const MORALIS_API_KEY = "Uc8R19AGNoihKYvvqmlt0P8t8nvqPWdxwHhuUE3LC68lLfVElfJRkVit8MGkWZam"
const address = "0xBea3DbCC78b63Be254d9877CA75092C5a26c0097"
const chain = 	EvmChain.MUMBAI
var FileReader = require('filereader')



app.get('/', (req, res) => {
  res.send('Hello World!')
});

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}



async function getDemoData() {
  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  })

  // Format the native balance formatted in ether via the .ether getter
  const native = nativeBalance.result.balance.ether

  return { native }
}

async function ipfs_upload(){
  var a=btoa(JSON.stringify("hiiii hello "));
  //   var reader= new FileReader();
// const reader = new FileReader()
  
// function base64(file){
    
//    reader.readAsText(file);
//    reader.onload = function () {
//      console.log(reader.result);
//    };
//    reader.onerror = function (error) {
//      console.log('Error: ', error);
//    };
//   }
  
//   base64(a.txt);
const abi = [
  {
      path: "a.txt",
      // content: "YOUR_JSON_OR_BASE64",
      // "content": reader.result, 
      "content": a, 
      

  },
  ];

const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
return {response}

}




app.get("/demo", async (req, res) => {
  try {
    // Get and return the crypto data
    const data = await getDemoData()
    res.status(200)
    res.json(data)
  } catch (error) {
    // Handle errors
    console.error(error)
    res.status(500)
    res.json({ error: error.message })
  }
})
app.get("/ipfs", async (req, res) => {
  try {
    // Get and return the crypto data
    const data = await ipfs_upload()
    res.status(200)
    res.json(data)
  } catch (error) {
    // Handle errors
    console.error(error)
    res.status(500)
    res.json({ error: error.message })
  }
})















startServer()