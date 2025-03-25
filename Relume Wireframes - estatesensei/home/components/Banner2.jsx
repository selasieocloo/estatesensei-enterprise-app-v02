"use client";

import { Button, Card } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useVisible = () => {
  const [isVisible, setIsVisible] = useState(true);
  const hide = () => {
    setIsVisible(false);
  };
  return {
    isVisible,
    hide,
  };
};

export function Banner2() {
  const visibleState = useVisible();
  return (
    <ConditionalRender condition={visibleState.isVisible}>
      <section id="relume" className="px-[5%]">
        <Card className="relative container flex flex-col justify-start p-4 md:flex-row md:items-center md:px-4 md:py-3">
          <div className="mr-7 mb-4 flex flex-1 items-start md:mr-8 md:mb-0 md:items-center">
            <a href="#">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo"
                className="mr-4 hidden size-8 lg:block"
              />
            </a>
            <div>
              <h2 className="font-semibold">
                Unlock Your African Real Estate Potential Today
              </h2>
              <p className="text-sm">
                Discover exclusive opportunities across 32 African countries.
              </p>
            </div>
          </div>
          <div>
            <Button title="Learn More" size="sm">
              Learn More
            </Button>
          </div>
          <button className="absolute top-2 right-2 ml-4 md:static">
            <RxCross2 className="size-8 p-1" onClick={visibleState.hide} />
          </button>
        </Card>
      </section>
    </ConditionalRender>
  );
}
