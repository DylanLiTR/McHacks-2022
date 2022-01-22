import * as React from 'react';
import {styled} from '@twilio-paste/core/styling-library';
import {Box, BoxStyleProps} from '@twilio-paste/core/box';
import {Anchor} from '@twilio-paste/core/anchor';
import {Button} from '@twilio-paste/core/button';
import {Heading} from '@twilio-paste/core/heading';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';
import {Flex} from '@twilio-paste/core/flex';
import './App.css';

interface FancyBoxProps {
  padding: BoxStyleProps['padding'];
}
const FancyBox: React.FC<FancyBoxProps> = styled(Box)({
  width: '40%',
});

export const IndexPage: React.FC = () => {
  const css = `
  body {
    margin: 0;
    padding: 0;
    background: #262626;
  }
  
  .cup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 180px;
    border: 6px solid #fff;
    border-radius: 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-sizing: border-box;
  }

  .follow {
    width: 500px;
    height: 150px;
    position: absolute;
    border: 5px solid #fff;
    padding: 5px;
    border-radius: 25px;
    top: 10%;
    box-sizing: border-box;

  }

  .calender{
    width: 200px;
    height: 450px;
    position: absolute;
    border: 5px solid #fff;
    padding: 5px;
    border-radius: 25px;
    top: 10%;
    box-sizing: border-box;
  }

  .handle {
    width: 100px;
    height: 40%;
    position: absolute;
    border: 6px solid white;
    top: 20%;
    left: 60%;
    border-radius: 30px;
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
  }
  
  .water {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background: rgb(0, 140, 255);
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    animation: animate 5s linear infinite;
  }
  
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    50% {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
  
  `
  return (
    <Box>
      <Flex>
        <Flex>
          <Box
            backgroundColor="colorBackgroundPrimaryWeak"
            padding="space40"
            height="100vh"
            width="size60"
          >
          <style>{css}</style>
          <div className='calender'>
            Caldender
          </div>
          </Box>
          
        </Flex>
        
        <Flex grow>
          <Box
            backgroundColor="colorBackgroundPrimaryWeaker"
            padding="space40"
            width="100%"
            height="100vh"


          >
            <Heading as="h1" variant="heading10">
              पानीpeers
              <style>{css}</style>
              <div className='follow'>
                You have drank __ cups!
                <Button variant="primary">
                  <PlusIcon decorative />
                  1
                </Button> <br></br>
                
                <p>Goal:__</p>
            
              </div>
              
            </Heading>
          
          <div className="cup">
          <div className='handle'></div>
          <div className='water'></div>
          </div>
          </Box>
         
        </Flex>
        <Flex>
          <Box
            backgroundColor="colorBackgroundPrimaryWeak"
            padding="space40"
            height="100vh"
            width="size60"
          >
            <Button variant="primary">
              <PlusIcon decorative />
              100mL
            </Button><br></br>
            <Button variant="primary">
              <PlusIcon decorative />
              250mL
            </Button><br></br>
            <Button variant="primary">
              <PlusIcon decorative />
              Custom
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
