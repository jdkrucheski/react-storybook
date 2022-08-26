import{H as e}from"./Header.ea3f63d3.js";import{j as t}from"./jsx-runtime.d8c0f9fc.js";import"./Button.06849454.js";import"./iframe.eb818b4a.js";const p={title:"Examples/Header",component:e,parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./components/Header";

export default {
  title: "Examples/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}},"logged-out":{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}}}},layout:"fullscreen"}},o=n=>t(e,{...n}),r=o.bind({});r.args={user:{name:"Jane Doe"}};const a=o.bind({});a.args={};const m=["LoggedIn","LoggedOut"];export{r as LoggedIn,a as LoggedOut,m as __namedExportsOrder,p as default};
//# sourceMappingURL=Header.stories.ecf87d1b.js.map
