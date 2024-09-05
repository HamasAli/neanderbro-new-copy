import { useEffect } from 'react';

export const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
};
