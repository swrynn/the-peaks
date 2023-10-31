import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Nav } from "./Nav";

describe("Nav", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Nav heading="Heading" />
      </MemoryRouter>
    );
  });

  it("should have heading and buttons", () => {
    expect(screen.getByText(/view bookmark/i)).toBeDefined();
  });
});
