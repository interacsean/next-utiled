import React from 'react';
import Story from '../Story';
import Box from '../Box';
import LoadingText from './LoadingText.view';

const LoadingTextStory = () => {
  return (
    <Box className="grid">
      <Story title="Basic">
        <LoadingText />
      </Story>
    </Box>
  );
};

export default LoadingTextStory;
