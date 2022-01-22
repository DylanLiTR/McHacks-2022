import * as React from 'react';
import {styled} from '@twilio-paste/core/styling-library';
import {Box, BoxStyleProps} from '@twilio-paste/core/box';
import {Anchor} from '@twilio-paste/core/anchor';
import {Button} from '@twilio-paste/core/button';
import {Heading} from '@twilio-paste/core/heading';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';
import {Flex} from '@twilio-paste/core/flex';

interface FancyBoxProps {
  padding: BoxStyleProps['padding'];
}
const FancyBox: React.FC<FancyBoxProps> = styled(Box)({
  width: '40%',
});

export const IndexPage: React.FC = () => {
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
          >
            <Heading as="h1" variant="heading10">
              पानीpeers
            </Heading>
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
