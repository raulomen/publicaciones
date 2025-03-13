'use client';

import React, { useEffect, useState } from 'react';
import { BackLink, Card, Container, Info, Loader, Title, WebsiteLink } from '@/styles/global.styles';

const fetchUser = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.json();
};

const UserPage = ({ params }: { params: { id: string } }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = params;

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await fetchUser(id);
        setUser(data);
      } catch (error) {
        setError('No se pudo obtener el usuario');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (loading) return <Loader>Cargando...</Loader>;
  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      <Card>
        <Title>{user?.name}</Title>

        <Info>
          <p><strong>Teléfono:</strong> {user?.phone}</p>
          <p><strong>Website:</strong> <WebsiteLink href={`https://${user?.website}`} target="_blank" rel="noopener noreferrer">{user?.website}</WebsiteLink></p>
          <p><strong>Dirección:</strong> {user?.address?.street}, {user?.address?.city}</p>
          <p><strong>Compañía:</strong> {user?.company?.name}</p>
        </Info>

        <BackLink href="/users">← Anterior</BackLink>
      </Card>
    </Container>
  );
};

export default UserPage;
