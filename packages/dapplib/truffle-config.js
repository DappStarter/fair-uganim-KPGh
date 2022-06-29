require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot filter radar rifle color coral light army gate'; 
let testAccounts = [
"0x63585b010b6ac5bdb9a58ecfbb198f47fb159f5aa0ef5c1a0ec7d22f055cab01",
"0x895ab56c76154c85eff865055a9f455c7c279d7a030ca9cd65e164cb4381ac94",
"0xdbb8169572941c4c4a77df12da640baf6486783f2a85a96dc9f54a6566403ae3",
"0xcd1ecce80174781c24b32dd1400a6c817c0c2c817f24dc99fc5d15918a0ff054",
"0x4b2fff6924f4260d1cd72fd7dc6ebbb7adb7366a5f1d3eb00092040fea290f28",
"0x5b570612044172fbe4831f10d25070b8f1bf775643647e1720cb7913385d674d",
"0x0f16995aa1967a0a3186d68f6212d4992e4f463e329e1db6caf56f56008b8fd3",
"0x8204be6a810dac672f58e86818ac8f3ac91c58e243f0ff5c1fa258672b6c78b1",
"0x52c9f182f8f83c3cb97e17d006d4da71e446f88f847031b137115112f544e5a5",
"0xc55fbe43ba3e9c8a78875017e9e234c7be8a3594f95190e36ac45886d9030d34"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

