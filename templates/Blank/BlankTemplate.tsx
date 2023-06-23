type BlankTemplateProps = {
  children: React.ReactNode;
};

const BlankTemplate = ({ children }: BlankTemplateProps) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-100">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
    </div>
  );
};

export default BlankTemplate;
