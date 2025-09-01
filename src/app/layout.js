import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  console.log('RootLayout');
  const timestamp = new Date().toLocaleString();

  return (
    <html lang='en'>
      <body>
        {children}
        <footer>Page rendered on {timestamp}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
