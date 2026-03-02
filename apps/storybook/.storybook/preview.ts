import type { Preview } from '@storybook/react';
import '../../../packages/tokens/src/generated/base.css';
import '../../../packages/tokens/src/generated/semantic-light.css';
import '../../../packages/tokens/src/generated/semantic-dark.css';
import '../../../packages/tokens/src/generated/core-colors.css';
import '../../../packages/tokens/src/generated/spacing.css';
import '../../../packages/tokens/src/generated/radius.css';
import '../../../packages/tokens/src/generated/typography.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { expanded: true }
  }
};

export default preview;
