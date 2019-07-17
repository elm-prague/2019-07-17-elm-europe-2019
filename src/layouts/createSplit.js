import React from 'react';
import { Box, Flex } from '@rebass/emotion';

const invertedFlexProps = {
  bg: 'text',
  color: 'background',
};

export const createSplit = ({
  ratioPercent = 50,
  layout = 'left',
  invert = false,
  invertPrimary: rawInvertPrimary,
  invertSecondary: rawInvertSecondary,
  padding = 3,
}) => {
  const ratio = ratioPercent / 100.0;
  const isRightLayout = layout === 'right';

  const invertPrimary =
    typeof rawInvertPrimary === 'undefined' ? invert : !!rawInvertPrimary;
  const invertSecondary =
    typeof rawInvertSecondary === 'undefined' ? invert : !!rawInvertSecondary;

  return ({ children }) => {
    const [a, ...rest] = React.Children.toArray(children);
    const primary = {
      key: 'primary',
      children: a,
      flexProps: {
        width: ratio,
        ...(invertPrimary ? invertedFlexProps : {}),
      },
    };
    const secondary = {
      key: 'secondary',
      children: rest,
      flexProps: {
        width: 1 - ratio,
        ...(invertSecondary ? invertedFlexProps : {}),
      },
    };

    const items = isRightLayout ? [secondary, primary] : [primary, secondary];

    return (
      <Flex
        css={{
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        {items.map(({ key, children, flexProps }) => (
          <Flex
            key={key}
            css={{
              overflow: 'auto',
            }}
            justifyContent="center"
            display="flex"
            flexDirection="column"
            alignSelf="stretch"
            padding={padding}
            {...flexProps}
          >
            <Box>{children}</Box>
          </Flex>
        ))}
      </Flex>
    );
  };
};
