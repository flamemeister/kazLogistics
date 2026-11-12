import test from "node:test";
import assert from "node:assert/strict";
import { prepareConsultation } from "../src/consultation/contract.js";
import { consultationCopy } from "../src/consultation/copy.js";

test("formatted phone numbers are normalized before the existing backend request", () => {
  const result = prepareConsultation({
    name: " Example ",
    phone: "+7 (702) 771-48-28",
    email: " qa@example.invalid ",
    comment: " Question ",
  });
  assert.deepEqual(result.invalid, []);
  assert.deepEqual(result.data, {
    name: "Example",
    phone: "+77027714828",
    email: "qa@example.invalid",
    comment: "Question",
  });
});
test("consultation validation matches required email and Django field limits", () => {
  assert.deepEqual(
    prepareConsultation({ name: " ", phone: "abc", email: "" }).invalid,
    ["name", "phone", "email"],
  );
  assert.deepEqual(
    prepareConsultation({
      name: "x".repeat(101),
      phone: "+123456789012345",
      email: "x".repeat(255),
      comment: "x".repeat(5001),
    }).invalid,
    ["name", "phone", "email", "comment"],
  );
});
test("flight and validation feedback is localized without modifying marketing dictionaries", () => {
  for (const locale of ["ru", "kk", "en", "zh"]) {
    assert.deepEqual(
      Object.keys(consultationCopy[locale]).sort(),
      Object.keys(consultationCopy.ru).sort(),
    );
    assert.ok(
      Object.values(consultationCopy[locale]).every(
        (value) => value.length > 0,
      ),
    );
  }
});
