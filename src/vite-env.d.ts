/// <reference types="vite/client" />
interface RowProps {
  align?: "start" | "end" | undefined;
}
interface ColProps {
  size?: number | undefined;
  stretch?: boolean | undefined;
  justify?: 'center' | undefined;
}