interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({
  children,
  className = "",
}: ContentCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-md ${className}`}>
      {children}
    </div>
  );
}
