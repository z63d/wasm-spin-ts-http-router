declare type RequestLike = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
};

export function withCorrelationId(req: RequestLike): void {
  req.correlationId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
}
