// src/hooks/usePageView.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '@/lib/analytics';

export const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    // Odpalane po każdym renderze wywołanym zmianą routingu
    pushToDataLayer('virtual_page_view', {
      page_path: location.pathname + location.search,
    });
  }, [location]);
};