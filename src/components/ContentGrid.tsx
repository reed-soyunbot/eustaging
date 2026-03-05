interface ContentGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export default function ContentGrid({ children, columns = 3 }: ContentGridProps) {
  const colClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-6 ${colClass}`}>
      {children}
    </div>
  );
}
