import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
