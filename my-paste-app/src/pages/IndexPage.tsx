import * as React from 'react';
import {styled} from '@twilio-paste/core/styling-library';
import {Box, BoxStyleProps} from '@twilio-paste/core/box';
import {Anchor} from '@twilio-paste/core/anchor';
import {Button} from '@twilio-paste/core/button';
import {Heading} from '@twilio-paste/core/heading';
import {Stack} from '@twilio-paste/core/stack';
import {MinusIcon} from '@twilio-paste/icons/esm/MinusIcon';
import {Flex} from '@twilio-paste/core/flex';

interface FancyBoxProps {
  padding: BoxStyleProps['padding'];
}
const FancyBox: React.FC<FancyBoxProps> = styled(Box)({
  width: '40%',
});

export const IndexPage: React.FC = () => {
  const css = `
    .cup {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 350px;
      height: 500px;
      border: 6px solid #fff;
      border-radius: 15px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      box-sizing: border-box;
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
    
    .buttons {
      position: absolute;
      top: 105%;
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
          </Box>
        </Flex>
        <Flex grow>
          <Box
            backgroundColor="colorBackgroundPrimaryWeaker"
            padding="space40"
            width="100%"
            height="100vh"
            textAlign="center"
          >
            <Heading as="h1" variant="heading10">
              पानीpeers
            </Heading>
            <div className="cup">
              <div className="water"></div>
              <div className='buttons'>
                <Stack 
                  orientation="horizontal" 
                  spacing="space60"
                >
                  <Button variant="secondary">
                    <MinusIcon decorative />
                    50mL
                  </Button>
                  <Button variant="secondary">
                    <MinusIcon decorative />
                    100mL
                  </Button>
                  <Button variant="secondary">
                    <MinusIcon decorative />
                    Custom
                  </Button>
                </Stack>
              </div>
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
          </Box>
        </Flex>
      </Flex>
      <style>{css}</style>
    </Box>
  );
};


