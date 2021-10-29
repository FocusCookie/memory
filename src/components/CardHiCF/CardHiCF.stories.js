import React from "react";
import { CardHiCF } from "./CardHiCF";
import { Button } from "../Button/Button";
import cover from "../../assets/Cover.jpg";

export default {
  title: "RickAndMorty/Card/CardHiCF",
  component: CardHiCF,
  argTypes: {},
};

const img = {
  src: cover,
  alt: "R&M",
};

const content = (
  <div className="px-4">
    <h1>This is some content</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus explicabo
      sapiente accusantium exercitationem ipsam nostrum, quis dolorem! Molestias
      hic totam ipsum sint aliquam nostrum, reprehenderit numquam nesciunt
      debitis necessitatibus quaerat.
    </p>
  </div>
);

const footer = (
  <div className="px-4 pb-4 flex flex-row justify-around items-center">
    <Button label="Action 1" />
    <Button label="Action 2" />
  </div>
);

const Template = (args) => <CardHiCF {...args}> </CardHiCF>;

export const Default = Template.bind({});

Default.args = {
  img,
  content,
  footer,
  width: "24rem",
};
