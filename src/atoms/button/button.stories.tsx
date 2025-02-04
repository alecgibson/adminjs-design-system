import React from 'react'

import { Button, Box, Icon as IconComponent, Label, Icon } from '../../../src'
import StoryWrapper from '../../utils/story-wrapper'

const variants = ['primary', 'light', 'danger', 'success', 'info', 'secondary', 'text'] as const
const ButtonVariant = ['primary', 'danger', 'text', 'success', 'info', 'secondary'] as const
const ButtonSize = ['sm', 'lg', 'icon', 'default'] as const

export const Default: React.FC = (props) => (
  <Box width={1}>
    <StoryWrapper label="Knobs example">
      <Button {...props}>
        Example buttton
      </Button>
    </StoryWrapper>
  </Box>
)

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Different versions">
      <Box mb="xl">
        <Label>Small</Label>
        <Button size="sm">Small [sm]</Button>
        <Button size="sm" ml="md">
          <Icon icon="Add" />
          Add brand
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Default</Label>
        <Button size="md">Default</Button>
        <Button size="md" ml="md">
          <Icon icon="Add" />
          Add brand
        </Button>
        <Button size="md" ml="md" variant="primary">
          <Icon icon="Car" />
          is driving
        </Button>
        <Button size="md" ml="md" variant="danger">
          is driving crazy
          <Icon icon="ArrowRight" />
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Large</Label>
        <Button size="lg">Large [lg]</Button>
        <Button size="lg" ml="md">
          <Icon icon="Add" />
          Add brand
        </Button>
        <Button size="lg" ml="md" variant="primary">
          <Icon icon="Car" />
          is driving
        </Button>
        <Button size="lg" ml="md" variant="danger">
          is driving crazy
          <Icon icon="ArrowRight" />
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Icon</Label>
        <Button size="icon"><IconComponent icon="Add" /></Button>
        <Button ml="md">Regular inside</Button>
        <Button size="icon" ml="md" rounded><IconComponent icon="Add" /></Button>
        <Button size="icon" ml="md" variant="text"><IconComponent icon="Add" /></Button>
      </Box>
    </StoryWrapper>

    <StoryWrapper label="Variants">
      {variants.map((variant) => (
        <Box mb="xl" key={variant}>
          <Label>{variant}</Label>
          <Button variant={variant}>{variant}</Button>
        </Box>
      ))}
    </StoryWrapper>

    <StoryWrapper label="With icons">
      <Box mb="xl">
        <Label>Small with icon</Label>
        <Button size="sm">
          <Icon icon="Add" />
          Small [sm]
        </Button>
        <Button size="sm" variant="primary" ml="default">
          <Icon icon="Car" />
          With other icon
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Default</Label>
        <Button size="default">
          <Icon icon="Add" />
          Default
        </Button>
        <Button size="default" ml="md" variant="light">
          <Icon icon="Add" />
          Light
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Large</Label>
        <Button size="lg">
          <Icon icon="Add" />
          Large [lg]
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Large</Label>
        <Button variant="text">
          <Icon icon="Add" />
          Text with icon
        </Button>
      </Box>
    </StoryWrapper>
  </Box>
)

export default {
  title: 'DesignSystem/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ButtonVariant,
      control: { type: 'select' },
    },
    size: {
      options: ButtonSize,
      control: { type: 'select' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}
