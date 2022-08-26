import{j as a}from"./jsx-runtime.d8c0f9fc.js";import"./iframe.eb818b4a.js";const e=({allCaps:n=!1,color:r="primary",label:l="No Label",size:t="normal",fontColor:s,backgroundColor:c="transparent"})=>a("span",{className:`label ${t} text-${r}`,style:{color:s,backgroundColor:c},children:n?l.toUpperCase():l});try{e.displayName="MyLabel",e.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Message to display on the label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalized label",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Basic button colors",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Custom font color",name:"fontColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"Custom font background color",name:"backgroundColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel/MyLabel.tsx#MyLabel"]={docgenInfo:e.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel/MyLabel.tsx#MyLabel"})}catch{}const f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h1",
  fontColor: "#5517ac",
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: "h1",
  fontColor: "#eeeeee",
  backgroundColor: "#000000",
};
`,locationsMap:{basic:{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}},"all-caps":{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}},secondary:{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}},tertiary:{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}},"custom-font-color":{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}},"custom-background-color":{startLoc:{col:49,line:14},endLoc:{col:80,line:14},startBody:{col:49,line:14},endBody:{col:80,line:14}}}}},title:"UI/MyLabel",component:e,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},o=n=>a(e,{...n}),i=o.bind({});i.args={size:"normal",allCaps:!1};const d=o.bind({});d.args={size:"normal",allCaps:!0};const p=o.bind({});p.args={size:"normal",color:"secondary"};const y=o.bind({});y.args={size:"normal",color:"tertiary"};const m=o.bind({});m.args={size:"h1",fontColor:"#5517ac"};const u=o.bind({});u.args={size:"h1",fontColor:"#eeeeee",backgroundColor:"#000000"};const L=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor","CustomBackgroundColor"];export{d as AllCaps,i as Basic,u as CustomBackgroundColor,m as CustomFontColor,p as Secondary,y as Tertiary,L as __namedExportsOrder,f as default};
//# sourceMappingURL=MyLabel.stories.adcf2695.js.map
