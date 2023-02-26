import { ofetch } from 'ofetch'

describe("Vitest", () => {
  test("マッチャー", async () => {
    const response = await ofetch("http://localhost:3000/api/sample");
    expect(response.api).toBe("works");
  })
});