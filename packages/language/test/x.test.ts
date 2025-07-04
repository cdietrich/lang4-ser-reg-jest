import { describe, expect, test } from "@jest/globals"
import { EmptyFileSystem } from "langium"
import { parseHelper } from "langium/test"

import { type Model } from "../src/index.js"
import { createHelloWorldServices } from "../src/hello-world-module.js"

describe("test global scope caching", () => {
  test("viech", async () => {
    const services = createHelloWorldServices(EmptyFileSystem).HelloWorld
    const x = await parseHelper(services)("person X")
    const md = x.parseResult.value as Model
    expect(md.persons).toHaveLength(2)
  })
})
