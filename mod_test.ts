import { assertEquals } from "https://deno.land/std@0.68.0/testing/asserts.ts";

import indent from "./mod.ts";

Deno.test("test indent", function () {
  assertEquals(
    indent(
      "Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt.",
    ),
    " Lorem ipsum dolor sit amet,\n consectetur adipisicing elit,\n sed do eiusmod tempor incididunt.",
  );
});

Deno.test("test indent with empty line", function () {
  assertEquals(
    indent(
      "Lorem ipsum dolor sit amet,\n\n\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt.",
      1,
    ),
    " Lorem ipsum dolor sit amet,\n\n\n consectetur adipisicing elit,\n sed do eiusmod tempor incididunt.",
  );
});
