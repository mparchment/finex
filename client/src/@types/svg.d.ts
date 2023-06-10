declare module '*.svg' {
    import { FunctionComponent, SVGProps } from 'react';
    const src: string;
    const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
    export { src, ReactComponent };
  }
  