const readline = require('readline');
const axios = require('axios');

console.clear();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const apiKey = 'bd77ea5b37fdbf4aaa574219312bdc6b85cc21be'; // ganti apikey lu di web bit.ly developer

function createShortLink(longUrl, apiKey) {
  axios
    .post(
      'https://api-ssl.bitly.com/v4/shorten',
      {
        long_url: longUrl
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    ) // ganti response disini
    .then(response => {
      const shortUrl = response.data.id;
      console.log('\33[0;32mSUKSES MEMBUAT SHORTLINK UNTUK LINK TERSEBUT.\n\33[0;33mSilahkan Copy Link Dibawah\n\n', shortUrl);
      rl.close();
    })
    .catch(error => {
      console.error('\33[0;31mSILAHKAN MASUKKAN LINK YANG BERAWAL "https://"', error.message);
      rl.close();
    });
}

rl.question('\33[0;32m      SHORTLINK MAKER\n\33[0;33m✭CREATOR : AKBAR D TRAGALGAR\n✭GITHUB : AkagamiNoAkbar\n✭YOUTUBE : AKBAR D TRAFALGAR\n✭FACEBOOK : AKBAR CANNAVARO\n\33[0;36m✂____________________________\nMASUKKAN LINK :', longUrl => {
  createShortLink(longUrl, apiKey);
});
//CREATED BY AKBAR D TRAFALGAR
//PLEASE DONT REPLACE