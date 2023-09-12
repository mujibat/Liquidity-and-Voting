import { ethers, network } from 'hardhat'
/*
 function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
*/
async function main() {
    const uniswapAddr = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    const token = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
    const amountTokenDesired = ethers.parseEther('10')
    const amountTokenMin = ethers.parseEther('0')
    const amountETHMin = ethers.parseEther('0')
    const to = '0x20bB82F2Db6FF52b42c60cE79cDE4C7094Ce133F'
    //const to = '0xA003A9A2E305Ff215F29fC0b7b4E2bb5a8C2F3e1'
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const deadline = currentTimestampInSeconds + 60;
   // const signer = '0x47173B170C64d16393a52e6C480b3Ad8c302ba1e'
    const ethHolder = '0x20bB82F2Db6FF52b42c60cE79cDE4C7094Ce133F'

    const uniswapContract = await ethers.getContractAt('IUniswap', uniswapAddr)
    const tokencontract = await ethers.getContractAt('IERC20', token)
    const ethSigner = await ethers.getImpersonatedSigner(ethHolder)
    // await network.provider.send('hardhat_setBalance', [
    //     ethHolder,
    //     '0x314DC71B531D35C4522554270000',
    //   ])
    //   console.log({
    //     tokenBal: await tokencontract.balanceOf(ethSigner)
    // }); 
    const unlimitedApproval = ethers.parseEther('10000')
    await tokencontract.connect(ethSigner).approve(uniswapAddr, unlimitedApproval)

    await uniswapContract.connect(ethSigner)
    .addLiquidityETH(token,
         amountTokenDesired,
          amountTokenMin, 
          amountETHMin,
           to,
            deadline, {
                value: ethers.parseEther('2')
            })
    await uniswapContract.connect(ethSigner).addLiquidityETH
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
