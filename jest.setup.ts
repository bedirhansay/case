import { server } from "@/lib/__test&Mocks__/MockServer/MockServer";
import "@testing-library/jest-dom";

beforeAll(() => server.listen());

beforeEach(() => server.resetHandlers());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
