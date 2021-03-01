import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

function onRouteChangeComplete(Fathom: any) {
  Fathom.trackPageview();
}

export const useFathom = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' && typeof document !== 'undefined') {
      Fathom.load('YAKFSIOZ', {
        includedDomains: ['explorer.stacks.co'],
      });

      const handleRouteChange = () => onRouteChangeComplete(Fathom);

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, []);
};
