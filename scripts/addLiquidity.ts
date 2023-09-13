// import { ethers, network } from 'hardhat'
// // address tokenA,
// //     address tokenB,
// //     uint amountADesired,
// //     uint amountBDesired,
// //     uint amountAMin,
// //     uint amountBMin,
// //     address to,
// //     uint deadline
// // ) external returns (uint amountA, uint amountB, uint liquidity);

// async function main() {
//     const uniswapAddr = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
//     const tokenA = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' //usdc
//     const tokenB = '0xdAC17F958D2ee523a2206206994597C13D831ec7' //usdt
//     const tokenHolder = '0x9f538dB18aF489Df56F705A883248E0832eF3a25'
//     // const tokenA = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
//     // const uniHolder = '0x6081258689a75d253d87cE902A8de3887239Fe80'
//     // const tokenB = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
//     // const daiHolder = '0x2Cc893B067d23851b685782E6dC614059eadFcd0'
//     const amountADesired = ethers.parseUnits('3')
//     const amountBDesired = ethers.parseUnits('5')
//     const amountAMin = ethers.parseEther('0')
//     const amountBMin = ethers.parseEther('0')
//     const to = '0xA003A9A2E305Ff215F29fC0b7b4E2bb5a8C2F3e1'
//     const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//     const deadline = currentTimestampInSeconds + 60;
//     const signer = '0x47173B170C64d16393a52e6C480b3Ad8c302ba1e'

//     const uniswapContract = await ethers.getContractAt('IUniswap', uniswapAddr)
//     const tokenAcontract = await ethers.getContractAt('IERC20', tokenA)
//     const tokenBcontract = await ethers.getContractAt('IERC20', tokenB)
//     const sigerSig = await ethers.getImpersonatedSigner(signer)
//     const unlimitedApproval = ethers.parseUnits('2000')

//     // await network.provider.send('hardhat_setBalance', [
//     //   signer,
//     //   '0xB6A5802F315AE00',
//     // ])

//    await tokenAcontract.connect(await ethers.getImpersonatedSigner(tokenHolder)).transfer(signer, ethers.parseUnits("1000"));

//    await tokenBcontract.connect(await ethers.getImpersonatedSigner(tokenHolder)).transfer(signer, ethers.parseUnits("1000"))
//   //  await tokenAcontract.connect(sigerSig).approve(uniswapAddr, unlimitedApproval)
//   //  await tokenBcontract.connect(sigerSig).approve(uniswapAddr, unlimitedApproval)
//     console.log({
//         usdcBal: await tokenAcontract.balanceOf(sigerSig) ,
//         usdtBal: await tokenBcontract.balanceOf(sigerSig) 
//     });
    
    

//     await uniswapContract.connect(sigerSig)
//     .addLiquidity(tokenA, tokenB,
//         amountADesired,
//         amountBDesired,
//         amountAMin,
//         amountBMin,
//         to,
//         deadline,
    
//     )
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });