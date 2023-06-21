type BlankTemplateProps = {
  children: React.ReactNode;
};

const BlankTemplate = ({ children }: BlankTemplateProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </main>
    </div>
  );
};

export default BlankTemplate;
