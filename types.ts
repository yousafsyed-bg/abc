import type { Context } from "./context.ts";
import type { Application } from "./app.ts";
import type { ServerRequest } from "./deps.ts";

/** `Renderer` is the interface that wraps the `render` function.  */
export type Renderer = {
  templates?: string;
  render<T>(name: string, data: T): Promise<Deno.Reader>;
};

/* `HandlerFunc` defines a function to serve HTTP requests. */
export type HandlerFunc = (c: Context) => Promise<unknown> | unknown;

/* `MiddlewareFunc` defines a function to process middleware. */
export type MiddlewareFunc = (next: HandlerFunc) => HandlerFunc;

export type ContextOptions = { app: Application; r: ServerRequest };
