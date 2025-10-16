import { useEffect } from 'react';
import { useDeviceSize } from '@/shared/hooks/useDeviceSize';

const DMPage = () => {
  const { isMobile } = useDeviceSize();

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);
  return <div>DMPage</div>;
};

export default DMPage;
