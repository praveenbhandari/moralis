const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

var FileReader = require('filereader')
const runApp = async () => {
  await Moralis.start({
    apiKey: "Uc8R19AGNoihKYvvqmlt0P8t8nvqPWdxwHhuUE3LC68lLfVElfJRkVit8MGkWZam",
    // ...and any other configuration
  });
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
  
  console.log(response.toJSON());
}

runApp();