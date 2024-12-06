import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
// @ts-expect-error Just because no time to fix it
global.TextDecoder = TextDecoder;
