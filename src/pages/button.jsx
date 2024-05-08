import React, { useState, useEffect } from "react";
import Web3 from "web3";
import TokenStakingABI from "../artifacts/contracts/Staking.sol/TokenStaking.json";
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
    const {width,height,text,title}=props
    console.log(title,'title');

    const navigate = useNavigate();
  const [web3, setWeb3] = useState(undefined);
  const [stakeAmount, setStakeAmount] = useState(0);
  const [stakingPeriod, setStakingPeriod] = useState(12);
  const [commitmentIndex, setCommitmentIndex] = useState(0);
  const [startDate, setStartDate] = useState(""); 
  const [endDate, setEndDate] = useState(""); 
  const [message, setMessage] = useState("");
  const [totalStakedAmount, setTotalStakedAmount] = useState(0);
  const [getNetwork, setGetNetwork] = useState(undefined);
  const [contracts, setContracts] = useState(undefined);
  const [contractAddress, setContractAddress] = useState(undefined);
  const [mmStatus, setMmStatus] = useState("Not connected!");
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState(undefined);
  const [stakingSuccess, setStakingSuccess] = useState(false);

   
    async function connectWallet(node) {
      if(node==='CONNECT WALLET')
      {
        console.log('ENTERED');
         navigate('/connect')
      }
      // Check Metamask status
      if (window.ethereum) {
        setMmStatus("✅ Metamask detected!");
        try {
          // Metamask popup will appear to connect the account
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          // Get address of the account
          setAccountAddress(accounts[0]);
          setIsConnected(true);
        } catch (error) {
          console.log("Error: ", error);
        }
      } else {
        setMmStatus("⚠️ No wallet detected! Please install Metamask.");
      }
    }
    
  return (
    <div className={`${width} ${height} ${text}`} onClick={()=>connectWallet(title)}>{title}</div>
  )
}

export default Button
