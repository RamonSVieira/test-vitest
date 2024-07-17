import "@testing-library/jest-dom"
import {render, screen } from "@testing-library/react"
import {describe, expect, test} from "vitest"
import App from "./App"
import "../setup-tests.ts"

describe("App", () => {
    test("Garante que a tela está renderizando", () => {
        render(<App/>)

        const element = screen.getByTestId("unico");

        expect(element).toBeInTheDocument();
    })
})
