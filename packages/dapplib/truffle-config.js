require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner knife flush space stomach curtain magic evil half kangaroo army giggle'; 
let testAccounts = [
"0x42030e6e66ca61fe311d7bd2e1605f4b341c4350b9207e44fd29a3512ab81d9b",
"0x6f43c826c22110cb87abad3efe1ec9868d9e6db76ef507904907a75829946c89",
"0x18f037809e261c7bd222748d5d428d6d79d4d8a667fcce044f79426326047df3",
"0xa7b768a6ff8b0f5e862186b97090a529941588b158035c85b1a8798e0ac79366",
"0x064a3d738a2f43bb081160278a038511fecd8683456732444c2d98491271b1a4",
"0x7d9bed444472978ccdedad99842cf7e418266de82f557dd068da997c876a5450",
"0x4fe23c70e066035ecd152af923ac90fdd57fa40de2fc0f823bd922b25d9bbc97",
"0x4d300fbe9ffa8e8391c093e008fb2f524b027d7b8540f85b4fbace270032394d",
"0x1ed525b621e2ef541a1fcd3090c71e1c13fe402bae44acf10effe46c61217024",
"0x337a12ece057970fb4d31f90a599f6345d311a10ae05a199ec63343aa1f7fcd4"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


