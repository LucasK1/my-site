import styled from 'styled-components';

const getHeight = ({ axis, size }: { axis: string; size: number }): number => {
  return axis === 'horizontal' ? 1 : size;
};

const getWidth = ({ axis, size }: { axis: string; size: number }): number => {
  return axis === 'vertical' ? 1 : size;
};

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export const InlineSpacer = styled(Spacer)`
  display: inline-block;
`;

export default Spacer;
