import React from "react";
import { Card } from "./Card";
import { Button } from "../Button/Button";

export default {
  title: "RickAndMorty/Card",
  component: Card,
  argTypes: {},
};

const header = (
  <div
    className="bg-center bg-cover h-80 flex justify-center items-center"
    style={{ backgroundImage: "url('https://source.unsplash.com/random/')" }}
  >
    <h1 className="font-bold filter drop-shadow text-white">
      This is the header
    </h1>
  </div>
);

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

const actions = (
  <div className="px-4 pb-4 flex flex-row justify-around items-center">
    <Button label="Action 1" />
    <Button label="Action 2" />
  </div>
);

const Template = (args) => (
  <Card {...args}> {[header, content, actions]} </Card>
);

export const Default = Template.bind({});
