import React from 'react';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';

const ConnectWallet = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
        setAccounts(accounts);
        }
    }

    return(
        
        <Flex justify="space-between" align="center" padding="30px">

            
            {/*Right Side - Sections and Connect*/}
            <Flex justify="space-between" align="center" padding="30px">
            <Spacer />
      

            {/*Connect*/}
            { isConnected ? (
                <Box margin="0 15px" 
                color="#008fd4"
                >Connected</Box>
            ) : (
                <Button 
                backgroundColor="#008fd4"
                borderRadius="15px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Connect</Button>
            ) }
        </Flex>
</Flex>


    );
};

export default ConnectWallet;