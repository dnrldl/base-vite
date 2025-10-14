import Header from '@/shared/layouts/Header';
import Navbar from '@/shared/layouts/Navbar';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div>
      <Header />
      {children}
      <Navbar />
    </div>
  );
};
Container.displayName = 'Container';

export default Container;
