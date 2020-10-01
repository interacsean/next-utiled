import React from 'react';
import Story from '../Story';
import Box from '../Box';

import Input from './Input.view';

const InputStory = () => {
  return (
    <>
      <Box className="grid theme--light">
        <Story title="Basic" className=" _6">
          <Input placeholder="My input" />
        </Story>
        <Story title="Inline" className="_6">
          <Input inline />
        </Story>
      </Box>
      <Box className="grid theme--dark">
        <Story title="Basic dark" className="_6">
          <Input placeholder="My input" />
        </Story>
        <Story title="Inline" className="_6">
          <Input inline />
        </Story>
      </Box>
      <Box className="grid theme--light">
        <Story title="Prefixed" className="_6">
          <label>
            <Input placeholder="My input" prefix="$" prefixWidthRem={1} />
          </label>
        </Story>
        <Story title="Error state" className="_6">
          <label>
            <Input placeholder="My input" error="Didn't quite get that" />
          </label>
        </Story>
      </Box>
    </>
  );
};

export default InputStory;
