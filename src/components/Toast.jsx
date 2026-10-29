import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-alert show">
      {message}
    </div>
  );
}
