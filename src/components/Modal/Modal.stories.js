import React from "react";
import { Modal } from "./Modal";

export default {
  title: "RickAndMorty/Modal",
  component: Modal,
  argTypes: {},
};

const content = (
  <div className="p-4 w-80 rounded-lg bg-gray-50 filter shadow-md">
    <h1 className="p-0 m-0">This is some content</h1>
    <p className="p-0 m-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus explicabo
      sapiente accusantium exercitationem ipsam nostrum, quis dolorem! Molestias
      hic totam ipsum sint aliquam nostrum, reprehenderit numquam nesciunt
      debitis necessitatibus quaerat.
    </p>
  </div>
);

const Template = (args) => <Modal {...args}> {content} </Modal>;

export const Default = Template.bind({});
