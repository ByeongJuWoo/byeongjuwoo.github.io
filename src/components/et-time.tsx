'use client';
import { useEffect, useState } from 'react';

export function ETTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Detroit',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }));
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return <span>{time}</span>;
}
