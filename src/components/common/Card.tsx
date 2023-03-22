type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className="bg-gray-600/60 shadow-md shadow-black backdrop-blur-sm rounded-md min-w-full p-3">
      {children}
    </div>
  );
};
