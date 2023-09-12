import { ethers, network } from 'hardhat'
// uint amountIn,
// uint amountOutMin,
// address[] calldata path,
// address to,
// uint deadline
async function main() {
    const uniswapAddr = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
    const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
    const amountIn = ethers.parseEther('5')
    const amountOutMin = ethers.parseEther('2')
    const path = [UNI, DAI]
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const deadline = currentTimestampInSeconds + 60;
    const UNIHOLDER = '0x47173B170C64d16393a52e6C480b3Ad8c302ba1e'
    const to = '0xd8500DA651A2e472AD870cDf76B5756F9c113257'
    

    const uniswapContract = await ethers.getContractAt('IUniswap', uniswapAddr)
    const unitokenContract = await ethers.getContractAt('IERC20', UNI)
    const daitokenContract = await ethers.getContractAt('IERC20', DAI)
    const UNISigner = await ethers.getImpersonatedSigner(UNIHOLDER)

    await unitokenContract.connect(UNISigner).approve(uniswapAddr, amountIn)

    await uniswapContract.connect(UNISigner).swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline)


}
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })