'use client';

import React from 'react';
import Link from 'next/link';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Footer, Header, Main, Nav, NavItem, NavList, Title, Wrapper } from '@/styles/global.styles';
const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="es">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Publicaciones</title>
        </head>
        <body>
          <Wrapper>
            <Header>
              <Title>Usuarios y Aplicaciones</Title>
              <Nav>
                <NavList>
                  <NavItem>
                    <Link href="/users">Usuarios</Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/posts">Publicaciones</Link>
                  </NavItem>
                </NavList>
              </Nav>
            </Header>
            <Main>{children}</Main>  {/* Aquí se renderiza el contenido de cada página */}
            <Footer>
              <p>&copy; 2025 Mi Aplicación</p>
            </Footer>
          </Wrapper>
        </body>
      </html>
    </QueryClientProvider>
  );
};

export default Layout;
