'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  Container, 
  Link, 
  PaginationButton, 
  PaginationContainer, 
  SearchInput, 
  UserCard, 
  UserInfo, 
  UserName,
 } from '@/styles/global.styles';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('No se pudieron cargar los usuarios');
  }
  return response.json();
};

const UsersPage = () => {
  const { data, error, isLoading, isError, refetch } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: true,
    retry: 2,
  });

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  const filteredUsers = data?.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil((filteredUsers?.length ?? 0) / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers?.slice(indexOfFirstUser, indexOfLastUser) || [];  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isLoading) return <div className="text-center">Cargando...</div>;
  
  if (isError) {
    return (
      <div className="text-center text-red-500">
        <p>{(error as Error).message}</p>
        <button onClick={() => refetch()} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Intentar de nuevo
        </button>
      </div>
    );
  }

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Buscar por nombre o username"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-4xl">
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <UserCard key={user.id}>
                <UserName>{user.name}</UserName>
                <UserInfo>Username: {user.username}</UserInfo>
                <UserInfo>Correo: {user.email}</UserInfo>
                <Link href={`/users/${user.id}`}>Ver Detalles</Link>
              </UserCard>
            ))
          ) : (
            <div className="text-center text-gray-500">No se encontraron usuarios.</div>
          )}
        </div>
      </div>

      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationButton
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            isActive={false}
          >
            Anterior
          </PaginationButton>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationButton
              key={index}
              onClick={() => paginate(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PaginationButton>
          ))}

          <PaginationButton
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            isActive={false}
          >
            Siguiente
          </PaginationButton>
        </PaginationContainer>
      )}

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span>{`Página ${currentPage} de ${totalPages}`}</span>
      </div>
    </Container>
  );
};

export default UsersPage;
