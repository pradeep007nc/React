import React, { FC } from 'react';
import { DemoComponentWrapper } from './DemoComponent.styled';

interface DemoComponentProps {}

const DemoComponent: FC<DemoComponentProps> = () => (
 <DemoComponentWrapper>
   hello world
 </DemoComponentWrapper>
);

export default DemoComponent;
