import clsx from "clsx";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={clsx("mx-auto max-w-4xl px-6", className)}>{children}</div>
);
