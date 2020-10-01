declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.module.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg' {
  const content: React.FC<{ className: string }>;
  export = content;
}
