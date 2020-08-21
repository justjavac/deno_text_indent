// see https://github.com/jonschlinkert/word-wrap/blob/0a0e06bfe215f3bf3f15f084b3640ed354770a19/test.js
import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";

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
