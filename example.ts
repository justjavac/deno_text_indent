import indent from "./mod.ts";

const str = indent(
  "Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt.",
  2,
);

console.log(str);
